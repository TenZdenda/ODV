<template>
	<div>
		<Navbar></Navbar>
		<v-content>
			<v-container>
				<v-row>
					<v-col>
						<h2 class="mt-5 mb-5 ml-5">Partneři ODV</h2>
						<ModalComponent
							v-if="showModal"
							:open="showModal"
							:item="selectedItem"
							@close="closeModal"
							@removeItem="deletePartner"
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
							Přidat partnera
						</v-btn>
						<v-dialog
							v-model="dialog"
							max-width="600px"
						>
							<v-card>
								<v-card-title>
									<span class="headline">Přidat nového partnera</span>
								</v-card-title>
								<v-card-text>
									<v-container>
										<v-row>
											<v-col cols="12">
												<v-text-field
													label="Název partnera"
													required
													v-model="partner.name"
												></v-text-field>
											</v-col>
											<v-col cols="12">
												<v-text-field
													label="Webový odkaz na stránky partnera"
													required
													v-model="partner.url"
												></v-text-field>
											</v-col>
											<v-col cols="12">
												<v-file-input
													label="Logo partnera (png, jpg, jpeg)"
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
										@click="addPartner"
										v-if="partner.action === 'add'"
									>Uložit</v-btn>
									<v-btn
										color="blue darken-1"
										text
										@click="saveEditPartner(id)"
										v-else
									>Uložit nové údaje</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-col>
				</v-row>
				<v-data-table
					:headers="headers"
					:items="partners"
					class="elevation-1"
					no-data-text="Zatím tu nic není"
				>
					<template v-slot:item.actions="{ item }">
						<a
							@click="editPartner(item)"
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
					text: "Název",
					align: "start",
					sortable: false,
					value: "name"
				},
				{
					text: "Webové stránky",
					align: "start",
					sortable: false,
					value: "url"
				},
				{ text: "Akce", value: "actions", sortable: false }
			],
			partners: [],
			dialog: false,
			partner: {
				name: "",
				url: "",
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
		getPartners() {
			axios
				.get("./api/partners")
				.then(resp => {
					if (resp.status === 200) {
						this.partners = resp.data.partners;
					}
				})
				.catch(error => {
					console.log(error);
					this.loading = false;
				});
		},
		getBase64(file) {
			let base64 = "";
			const reader = new FileReader();
			reader.onloadend = f => {
				this.partner.base64 = reader.result;
			};

			if (file) {
				reader.readAsDataURL(file);
			}
		},
		addPartner() {
			axios
				.post(
					"./api/newPartner",
					{
						name: this.partner.name,
						url: this.partner.url,
						logo: this.partner.base64
					},
					this.getAuth()
				)
				.then(resp => {
					if (resp.status === 200) {
						this.partners.push(resp.data.partner);
						this.dialog = false;
						this.partner.name = "";
						this.partner.url = "";
						this.partner.base64 = "";
					}
				});
		},
		deletePartner(item) {
			axios
				.delete("./api/deletePartner/" + item.id, this.getAuth(), {})
				.then(resp => {
					if (resp.status === 200) {
						this.partners.splice(this.partners.indexOf(item), 1);
					}
					this.showModal = false;
				});
		},
		editPartner(item) {
			this.partner.name = item.name;
			this.partner.url = item.url;
			this.partner.action = "edit";
			this.id = item.id;
			this.dialog = true;
		},
		saveEditPartner(id) {
			axios
				.post(
					"./api/editPartner/" + id,
					{
						name: this.partner.name,
						url: this.partner.url,
						logo: this.partner.base64
					},
					this.getAuth()
				)
				.then(resp => {
					if (resp.status === 200) {
						this.dialog = false;
						this.getPartners();
						this.partner.name = "";
						this.partner.url = "";
						this.partner.base64 = "";
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
		this.getPartners();
	}
};
</script>
