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
							@removeItem="deleteFaq"
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
							Přidat novou otázku
						</v-btn>
						<v-dialog
							v-model="dialog"
							max-width="600px"
							v-on:click:outside="closeDialog"
						>
							<v-card>
								<v-card-title>
									<span class="headline">Přidat novou otázku</span>
								</v-card-title>
								<v-card-text>
									<v-container>
										<v-row>
											<v-col cols="12">
												<v-text-field
													label="Otázka"
													required
													v-model="faq.question"
												></v-text-field>
											</v-col>
											<v-col cols="12">
												<v-textarea
													v-model="faq.answer"
													auto-grow
													label="Odpověď"
													rows="1"
												></v-textarea>
											</v-col>
										</v-row>
									</v-container>
								</v-card-text>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn
										color="blue darken-1"
										text
										@click="closeDialog"
									>Zavřít</v-btn>
									<v-btn
										color="blue darken-1"
										text
										@click="addFaq"
										v-if="faq.action === 'add'"
									>Uložit</v-btn>
									<v-btn
										color="blue darken-1"
										text
										@click="saveEditFaq(id)"
										v-else
									>Uložit nové údaje</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-col>
				</v-row>
				<v-data-table
					:headers="headers"
					:items="faqs"
					class="elevation-1"
					no-data-text="Zatím tu nic není"
				>
					<template v-slot:item.actions="{ item }">
						<a
							@click="editFaq(item)"
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
					text: "Otázka",
					align: "start",
					sortable: false,
					value: "question"
				},
				{ text: "Odpověď", sortable: false, value: "answer" },
				{ text: "Akce", value: "actions", sortable: false }
			],
			dialog: false,
			faqs: [],
			faq: {
				question: "",
				answer: "",
				action: "add"
			},
			id: 0,
			formatFaqs: [],
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
		getFaq() {
			axios.get("./api/formatedFaqs", this.getAuth()).then(resp => {
				if (resp.status === 200) {
					this.faqs = resp.data.formatedFaqs;
				}
			});
		},
		addFaq() {
			axios
				.post(
					"./api/addFaq",
					{
						question: this.faq.question,
						answer: this.faq.answer
					},
					this.getAuth()
				)
				.then(resp => {
					if (resp.status === 200) {
						this.faqs.push(resp.data.faq);
						this.dialog = false;
						this.faq.question = "";
						this.faq.answer = "";
					}
				});
		},
		editFaq(item) {
			axios.get("./api/faq/" + item.id, this.getAuth()).then(resp => {
				this.faq.question = resp.data.faq.question;
				this.faq.answer = resp.data.faq.answer;
			});
			this.faq.action = "edit";
			this.id = item.id;
			this.dialog = true;
		},
		deleteFaq(item) {
			axios
				.delete("./api/deleteFaq/" + item.id, this.getAuth(), {})
				.then(resp => {
					if (resp.status === 200) {
						this.faqs.splice(this.faqs.indexOf(item), 1);
					}
					this.showModal = false;
				});
		},
		saveEditFaq(id) {
			axios
				.post(
					"./api/editFaq/" + id,
					{
						question: this.faq.question,
						answer: this.faq.answer
					},
					this.getAuth()
				)
				.then(resp => {
					if (resp.status === 200) {
						this.dialog = false;
						this.getFaq();
						this.faq.question = "";
						this.faq.answer = "";
					}
				})
				.catch(error => {
					console.log(error);
				});
		},
		closeDialog() {
			this.dialog = false;
			this.faq.question = "";
			this.faq.answer = "";
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
		this.getFaq();
	},
	computed: {}
};
</script>
