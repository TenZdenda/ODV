<template>
	<div>
		<Navbar></Navbar>
		<v-content>
			<v-container>
				<v-row>
					<v-col>
						<h2 class="mt-5 mb-5 ml-5">Dokumenty</h2>
					</v-col>
					<v-spacer></v-spacer>
					<v-col>
						<v-btn
							@click="dialog = true"
							color="primary"
							style="float: right"
							class="mr-5 mt-5 mb-5"
						>
							Nahrát dokument
						</v-btn>
						<v-dialog
							v-model="dialog"
							max-width="600px"
						>
							<v-card>
								<v-card-title>
									<span class="headline">Nahrát nový dokument</span>
								</v-card-title>
								<v-card-text>
									<v-container>
										<v-row>
											<v-col cols="12">
												<v-text-field
													label="Název dokumentu"
													required
													v-model="file.name"
												></v-text-field>
											</v-col>
											<v-col cols="12">
												<v-file-input
													label="Dokument (pdf)"
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
										@click="addDocument"
									>Uložit</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-col>
				</v-row>
				<v-data-table
					:headers="headers"
					:items="files"
					class="elevation-1"
					no-data-text="Zatím tu nic není"
				>
					<template v-slot:item.actions="{ item }">
						<a class="action-icon">
							<i class="uil uil-trash-alt"></i>
						</a>
					</template>
				</v-data-table>
			</v-container>
		</v-content>
		<v-snackbar
			v-model="snackbar"
			:color="color"
		>
			{{ text }}
			<v-btn
				color="white"
				text
				@click="snackbar = false"
			>
				Close
			</v-btn>
		</v-snackbar>
	</div>
</template>
<script>
import Navbar from "../../components/Navbar.vue";

export default {
	components: {
		Navbar
	},
	data() {
		return {
			headers: [
				{
					text: "Dokument",
					align: "start",
					sortable: false,
					value: "name"
				},
				{
					text: "Cesta",
					align: "start",
					sortable: false,
					value: "path"
				},
				{ text: "Akce", value: "actions", sortable: false }
			],
			files: [],
			dialog: false,
			file: {
				name: "",
				base64: ""
			},
			id: 0,
			snackbar: false,
			text: "",
			color: "success"
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
		getDocuments() {
			axios
				.get("./api/documents")
				.then(resp => {
					if (resp.status === 200) {
						this.files = resp.data.documents;
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
				this.file.base64 = reader.result;
			};

			if (file) {
				reader.readAsDataURL(file);
			}
		},
		addDocument() {
			axios
				.post(
					"./api/uploadDocument",
					{
						name: this.file.name,
						document: this.file.base64
					},
					this.getAuth()
				)
				.then(resp => {
					if (resp.status === 200) {
						this.files.push(resp.data.file);
						this.dialog = false;
					}
				})
				.catch(error => {
					this.text = error.response.data.error;
					this.color = "error";
					this.snackbar = true;
				});
		},
		deleteDocument(item) {
			// TO-DO
		}
	},
	mounted() {
		this.getDocuments();
	}
};
</script>
