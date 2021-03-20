<template>
	<div>
		<Navbar></Navbar>
		<v-content>
			<v-container>
				<v-row>
					<v-col>
						<h2 class="mt-5 mb-5 ml-5">Reference od partnerů</h2>
						<ModalComponent
							v-if="showModal"
							:open="showModal"
							:item="selectedItem"
							@close="closeModal"
							@removeItem="deleteReference"
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
							Přidat novou referenci
						</v-btn>
						<v-dialog
							v-model="dialog"
							max-width="600px"
						>
							<v-card>
								<v-card-title>
									<span class="headline">Přidat novou referenci</span>
								</v-card-title>
								<v-card-text>
									<v-container>
										<v-row>
											<v-col cols="12">
												<v-textarea
													v-model="reference.text"
													auto-grow
													label="Reference"
													rows="1"
												></v-textarea>
											</v-col>
											<v-col cols="12">
												<v-text-field
													label="Jméno autora"
													required
													v-model="reference.author"
												></v-text-field>
											</v-col>
											<v-col cols="12">
												<v-text-field
													label="Pozice autora"
													required
													v-model="reference.position"
												></v-text-field>
											</v-col>
											<v-col cols="12">
												<v-text-field
													label="Společnost ve které autor pracuje"
													required
													v-model="reference.company"
												></v-text-field>
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
										@click="addReference"
										v-if="reference.action === 'add'"
									>Uložit</v-btn>
									<v-btn
										color="blue darken-1"
										text
										@click="saveEditReference(id)"
										v-else
									>Uložit nové údaje</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-col>
				</v-row>
				<v-data-table
					:headers="headers"
					:items="references"
					class="elevation-1"
					no-data-text="Zatím tu nic není"
				>
					<template v-slot:item.actions="{ item }">
						<a
							@click="editReference(item)"
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
					text: "Text",
					align: "start",
					sortable: false,
					value: "text"
				},
				{ text: "Autor", sortable: false, value: "author" },
				{ text: "Pozice", sortable: false, value: "position" },
				{ text: "Společnost", sortable: false, value: "company" },
				{ text: "Akce", value: "actions", sortable: false }
			],
			dialog: false,
			references: [],
			reference: {
				text: "",
				author: "",
				position: "",
				company: "",
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
		getReferences() {
			axios.get("./api/reference").then(resp => {
				if (resp.status === 200) {
					this.references = resp.data.references;
				}
			});
		},
		addReference() {
			axios
				.post(
					"./api/addReference",
					{
						text: this.reference.text,
						author: this.reference.author,
						position: this.reference.position,
						company: this.reference.company
					},
					this.getAuth()
				)
				.then(resp => {
					if (resp.status === 200) {
						this.references.push(resp.data.reference);
						this.dialog = false;
						this.reference.text = "";
						this.reference.author = "";
						this.reference.position = "";
						this.reference.company = "";
					}
				});
		},
		editReference(item) {
			this.reference.text = item.text;
			this.reference.author = item.author;
			this.reference.position = item.position;
			this.reference.company = item.company;
			this.reference.action = "edit";
			this.id = item.id;
			this.dialog = true;
		},
		deleteReference(item) {
			axios
				.delete("./api/deleteReference/" + item.id, this.getAuth(), {})
				.then(resp => {
					if (resp.status === 200) {
						this.references.splice(
							this.references.indexOf(item),
							1
						);
						this.showModal = false;
					}
				});
		},
		saveEditReference(id) {
			axios
				.post(
					"./api/editReference/" + id,
					{
						text: this.reference.text,
						author: this.reference.author,
						position: this.reference.position,
						company: this.reference.company
					},
					this.getAuth()
				)
				.then(resp => {
					if (resp.status === 200) {
						this.dialog = false;
						this.getReferences();
						this.reference.text = "";
						this.reference.author = "";
						this.reference.position = "";
						this.reference.company = "";
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
		this.getReferences();
	},
	computed: {}
};
</script>
