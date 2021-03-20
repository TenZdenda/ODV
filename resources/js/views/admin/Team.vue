<template>
	<div>
		<Navbar></Navbar>
		<v-content>
			<v-container>
				<v-row>
					<v-col>
						<h2 class="mt-5 mb-5 ml-5">Realizační tým ODV</h2>
						<ModalComponent
							v-if="showModal"
							:open="showModal"
							:item="selectedItem"
							@close="closeModal"
							@removeItem="deleteMember"
						></ModalComponent>
					</v-col>
					<v-spacer></v-spacer>
					<v-col>
						<v-btn
							@click="dialog = true"
							color="primary"
							style="float: right"
							class="mr-5 mt-5 mb-5"
						>
							Přidat člena realizačního týmu
						</v-btn>
						<v-dialog
							v-model="dialog"
							max-width="600px"
						>
							<v-card>
								<v-card-title>
									<span class="headline">Přidat nového člena realizačního týmu</span>
								</v-card-title>
								<v-card-text>
									<v-container>
										<v-row>
											<v-col cols="12">
												<v-text-field
													label="Titul"
													required
													v-model="member.degree"
												></v-text-field>
											</v-col>
											<v-col cols="12">
												<v-text-field
													label="Jméno"
													required
													v-model="member.name"
												></v-text-field>
											</v-col>
											<v-col cols="12">
												<v-text-field
													label="Role"
													required
													v-model="member.role"
												></v-text-field>
											</v-col>
											<v-col cols="12">
												<v-text-field
													label="Email"
													required
													v-model="member.email"
												></v-text-field>
											</v-col>
											<v-col cols="12">
												<v-file-input
													label="Fotka člena (png, jpg, jpeg)"
													show-size
													required
													@change="getBase64"
												></v-file-input>
											</v-col>
										</v-row>
									</v-container>
								</v-card-text>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn
										color="blue darken-1"
										text
										@click="dialog = false"
									>Zavřít</v-btn>
									<v-btn
										color="blue darken-1"
										text
										@click="addMember"
										v-if="member.action === 'add'"
									>Uložit</v-btn>
									<v-btn
										color="blue darken-1"
										text
										@click="saveEditMember(id)"
										v-else
									>Uložit nové údaje</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-col>
				</v-row>
				<v-data-table
					:headers="headers"
					:items="members"
					class="elevation-1"
					no-data-text="Zatím tu nic není"
				>
					<template v-slot:item.avatar="{ item }">
						<div class="p-2">
							<img
								:src="item.avatar"
								:alt="item.name"
								width="35px"
								class="member-avatar"
							>
						</div>
					</template>
					<template v-slot:item.actions="{ item }">
						<a
							@click="editMember(item)"
							class="mr-2 action-icon"
						>
							<i class="uil uil-pen"></i>
						</a>
						<a
							@click="confirmDelete(item)"
							class="action-icon"
						>
							<i class="uil uil-trash-alt"></i>
						</a>
					</template>
				</v-data-table>
			</v-container>
		</v-content>
	</div>
</template>
<script>
import Navbar from "../../components/Navbar.vue";
import ModalComponent from "../../components/ModalComponent";
export default {
	components: {
		Navbar,
		ModalComponent
	},
	data() {
		return {
			headers: [
				{
					text: "Avatar",
					align: "start",
					sortable: false,
					value: "avatar"
				},
				{ text: "Titul", sortable: false, value: "degree" },
				{ text: "Jméno", sortable: false, value: "name" },
				{ text: "Role", value: "role", sortable: false },
				{ text: "Email", value: "email", sortable: false },
				{ text: "Akce", value: "actions", sortable: false }
			],
			dialog: false,
			members: [],
			member: {
				degree: "",
				name: "",
				role: "",
				email: "",
				base64: "",
				action: "add"
			},
			id: 0,
			showModal: false,
			selectedItem: null
		};
	},
	methods: {
		getAuth() {
			const config = {
				headers: {
					Authorization: `Bearer ${localStorage.getItem(
						"access_token"
					)}`
				}
			};

			return config;
		},
		getTeamMembers() {
			axios.get("./api/team").then(resp => {
				if (resp.status === 200) {
					this.members = resp.data.team;
				}
			});
		},
		getBase64(file) {
			let base64 = "";
			const reader = new FileReader();
			reader.onloadend = f => {
				this.member.base64 = reader.result;
			};

			if (file) {
				reader.readAsDataURL(file);
			}
		},
		addMember() {
			axios
				.post(
					"./api/addMember",
					{
						degree: this.member.degree,
						name: this.member.name,
						role: this.member.role,
						email: this.member.email,
						avatar: this.member.base64
					},
					this.getAuth()
				)
				.then(resp => {
					if (resp.status === 200) {
						this.members.push(resp.data.member);
						this.dialog = false;
						this.member.degree = "";
						this.member.name = "";
						this.member.role = "";
						this.member.email = "";
						this.member.base64 = "";
					}
				});
		},
		deleteMember(item) {
			axios
				.delete("./api/deleteMember/" + item.id, this.getAuth(), {})
				.then(resp => {
					if (resp.status === 200) {
						this.members.splice(this.members.indexOf(item), 1);
					}
					this.showModal = false;
				});
		},
		editMember(item) {
			this.member.degree = item.degree;
			this.member.name = item.name;
			this.member.role = item.role;
			this.member.email = item.email;
			this.member.action = "edit";
			this.id = item.id;
			this.dialog = true;
		},
		saveEditMember(id) {
			axios
				.post(
					"./api/editMember/" + id,
					{
						degree: this.member.degree,
						name: this.member.name,
						role: this.member.role,
						email: this.member.email,
						avatar: this.member.base64
					},
					this.getAuth()
				)
				.then(resp => {
					if (resp.status === 200) {
						this.dialog = false;
						this.getTeamMembers();
						this.member.degree = "";
						this.member.name = "";
						this.member.role = "";
						this.member.email = "";
						this.member.base64 = "";
					}
				})
				.catch(error => {
					console.log(error);
				});
		},
		closeModal(value) {
			this.showModal = value;
		},
		confirmDelete(item) {
			this.showModal = true;
			this.selectedItem = item;
		}
	},
	mounted() {
		this.getTeamMembers();
	},
	computed: {}
};
</script>
