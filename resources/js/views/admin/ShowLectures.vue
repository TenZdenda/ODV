<template>
	<div>
		<Navbar></Navbar>
		<v-content>
			<v-container>
				<v-row>
					<v-col>
						<h2 class="mt-5 mb-5 ml-5">Přednášky na ODV</h2>
						<ModalComponent
							v-if="showModal"
							:open="showModal"
							:item="selectedItem"
							@close="closeModal"
							@removeItem="deleteLecture"
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
							Přidat novou přednášku
						</v-btn>
						<v-dialog
							v-model="dialog"
							max-width="600px"
							@click:outside="close"
						>
							<v-card>
								<v-card-title>
									<span class="headline">Přidat novou přednášku</span>
								</v-card-title>
								<v-card-text>
									<v-container>
										<v-form ref="form">
											<v-row>
												<v-col cols="12">
													<v-text-field
														label="Název přednášky"
														required
														v-model="lecture.title.value"
														:error-messages="lecture.title.error"
														:rules="titleRules"
													></v-text-field>
												</v-col>
												<v-col cols="12">
													<v-text-field
														label="Název firmy"
														required
														v-model="lecture.company.value"
														:error-messages="lecture.company.error"
														:rules="companyRules"
													></v-text-field>
												</v-col>
												<v-col cols="12">
													<v-text-field
														label="Čas přednášky"
														required
														v-model="lecture.time.value"
														:error-messages="lecture.time.error"
														type="time"
														:rules="timeRules"
													></v-text-field>
												</v-col>
												<v-col cols="12">
													<v-text-field
														label="Učebna"
														required
														v-model="lecture.place.value"
														:error-messages="lecture.place.error"
														:rules="placeRules"
													></v-text-field>
												</v-col>
												<v-col cols="12">
													<v-text-field
														label="Maximální počet diváků"
														required
														v-model="lecture.viewers.value"
														:error-messages="lecture.viewers.error"
														:rules="viewerRules"
														type="number"
													></v-text-field>
												</v-col>
											</v-row>
											<v-row>
												<v-spacer></v-spacer>
												<v-btn
													color="blue darken-1"
													text
													@click="close"
												>Zavřít</v-btn>
												<v-btn
													color="blue darken-1"
													text
													@click="addLecture"
													v-if="lecture.action === 'add'"
												>Uložit</v-btn>
												<v-btn
													color="blue darken-1"
													text
													@click="saveEditLecture(id)"
													v-else
												>Uložit nové údaje</v-btn>
											</v-row>
										</v-form>
									</v-container>
								</v-card-text>
							</v-card>
						</v-dialog>
					</v-col>
				</v-row>
				<v-data-table
					:headers="headers"
					:items="lectures"
					class="elevation-1"
					no-data-text="Zatím tu nic není"
				>
					<template v-slot:item.actions="{ item }">
                        <a
                            @click="openLecture(item)"
                            class="mr-2 action-icon"
                        >
                            <i class="uil uil-eye"></i>
                        </a>
						<a
							@click="editLecture(item)"
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
            <LectureDetail
                v-if="detailDialog"
                :open="detailDialog"
                :item="detailLecture"
                :loggedUsers="loggedUsersLecture"
                @close="closeDetail"
            ></LectureDetail>
		</v-content>
	</div>
</template>
<script>
import Navbar from "../../components/Navbar";
import ModalComponent from "../../components/ModalComponent";
import LectureDetail from "../../components/LectureDetail";

export default {
	components: {
		Navbar,
		ModalComponent,
        LectureDetail
	},
	data() {
		return {
			dialog: false,
			headers: [
				{
					text: "Název přednášky",
					align: "start",
					sortable: false,
					value: "title"
				},
				{
					text: "Název firmy",
					value: "company",
					sortable: false
				},
				{
					text: "Čas",
					value: "time",
					sortable: true
				},
				{
					text: "Učebna",
					value: "place",
					sortable: false
				},
				{
					text: "Maximální počet",
					value: "viewers",
					sortable: false
				},
				{
					text: "Akce",
					value: "actions",
					sortable: false
				}
			],
			lectures: [],
			editedIndex: -1,
			lecture: {
				title: {
					value: "",
					error: ""
				},
				company: {
					value: "",
					error: ""
				},
				time: {
					value: "08:00",
					error: ""
				},
				place: {
					value: "",
					error: ""
				},
				viewers: {
					value: 0,
					error: ""
				},
				action: "add"
			},
			id: 0,
			showModal: false,
            detailDialog: false,
            detailLecture: {},
            loggedUsersLecture: {},
			selectedItem: null,
			titleRules: [v => !!v || "Titulek je povinný údaj"],
			companyRules: [v => !!v || "Firma je povinný údaj"],
			timeRules: [v => !!v || "Čas je povinný údaj"],
			placeRules: [v => !!v || "Učebna je povinný údaj"],
			viewerRules: [v => !!v || "Počet diváků je povinný údaj"]
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
		getAllLectures() {
			axios.get("./api/getAllLectures", this.getAuth()).then(response => {
				this.lectures = response.data.lectures;
			});
		},
		addLecture() {
			if (this.$refs.form.validate()) {
				axios
					.post(
						"./api/createNewLecture",
						{
							title: this.lecture.title.value,
							company: this.lecture.company.value,
							time: this.lecture.time.value,
							place: this.lecture.place.value,
							viewers: this.lecture.viewers.value
						},
						this.getAuth()
					)
					.then(resp => {
						if (resp.status === 200) {
							this.lectures.push(resp.data.lecture);
							this.close()
						}
					}).catch(error => {
						if ((error.response.status = 422)) {
                            this.lecture.title.error = error.response.data.errors.title;
                            this.lecture.company.error = error.response.data.errors.company;
                            this.lecture.time.error = error.response.data.errors.time;
                            this.lecture.place.error = error.response.data.errors.place;
                            this.lecture.viewers.error = "Maximální počet diváků musí být kladné číslo!";
						}
					});
			}
		},
		deleteLecture(item) {
			axios
				.delete("./api/deleteLecture/" + item.id, this.getAuth(), {})
				.then(resp => {
					if (resp.status === 200) {
						this.lectures.splice(this.lectures.indexOf(item), 1);
					}
					this.showModal = false;
				});
		},
		editLecture(item) {
			this.lecture.title.value = item.title;
			this.lecture.company.value = item.company;
			this.lecture.time.value = item.time;
			this.lecture.place.value = item.place;
			this.lecture.viewers.value = item.viewers;
			this.lecture.action = "edit";
			this.id = item.id;
			this.dialog = true;
		},
		saveEditLecture(id) {
			axios
				.post(
					"./api/editLecture/" + id,
					{
						title: this.lecture.title.value,
						company: this.lecture.company.value,
						time: this.lecture.time.value,
						place: this.lecture.place.value,
						viewers: this.lecture.viewers.value
					},
					this.getAuth()
				)
				.then(resp => {
					if (resp.status === 200) {
						this.getAllLectures();
                        this.close()
					}
				});
		},
		close() {
			this.lecture = {
                title: {
                    value: "",
                    error: ""
                },
                company: {
                    value: "",
                    error: ""
                },
                time: {
                    value: "08:00",
                    error: ""
                },
                place: {
                    value: "",
                    error: ""
                },
                viewers: {
                    value: 0,
                    error: ""
                },
				action: "add"
			};
			this.dialog = false;
			this.$refs.form.reset();
		},
		closeModal(value) {
			this.showModal = value;
		},
        closeDetail(value) {
            this.detailDialog = value;
        },
		confirmDelete(item) {
			this.showModal = true;
			this.selectedItem = item;
		},
        openLecture(item) {
            axios.get("./api/lecture/" + item.id, this.getAuth()).then(response => {
                if (response.status === 200) {
                    this.detailLecture = response.data.lecture.lecture
                    this.loggedUsersLecture = response.data.lecture.loggedUsers
                    this.detailDialog = true;
                }
            });
        }
	},
	mounted() {
		this.getAllLectures();
	}
};
</script>
