<template>
	<div>
		<navbar-component></navbar-component>
		<v-container>
			<h1 class="text-center mt-5">Zapiš si přednášku</h1>
			<div v-if="loggedIn">
				<p class="text-center">{{ fullName }}, {{formatText}}</p>
				<v-data-table
					:headers="headers"
					:items="lectures"
					:items-per-page="10"
					class="elevation-1"
					:loading="loading"
					loading-text="Načítání... Prosím počkejte"
				>
					<template v-slot:item.viewers="{ item }">
						<span>{{ item.loggedUsers }} / {{ item.viewers }}</span>
					</template>

					<template v-slot:item.actions="{ item }">
						<a
							@click="addLecture(item.id)"
							v-if="!item.login && item.loggedUsers != item.viewers"
						>Zapsat se</a>
						<a
							@click="leftLecture(item.id)"
							v-else-if="item.login == true"
						>Odhlásit se</a>
						<span v-else>Plno</span>
					</template>
				</v-data-table>
			</div>
			<div v-else>
				<p class="text-center">Pro zapsání přednášky se musíš <a href="/login">přihlásit</a></p>

				<v-data-table
					:headers="anyHeaders"
					:items="anyLectures"
					:items-per-page="10"
					class="elevation-1"
					:loading="loading"
					loading-text="Načítání... Prosím počkejte"
				>
					<template v-slot:item.viewers="{ item }">
						<span v-if="item.loggedUsers != item.viewers">{{ item.loggedUsers }} / {{ item.viewers }}</span>
						<span v-else>Plno</span>
					</template>

				</v-data-table>
			</div>

		</v-container>
		<v-snackbar v-model="snackbar">
			{{ errorMessage }}
			<v-btn
				color="pink"
				text
				@click="snackbar = false"
			>
				Close
			</v-btn>
		</v-snackbar>
	</div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import NavbarComponent from "../components/NavbarComponent.vue";

export default {
	components: {
		NavbarComponent
	},
	data() {
		return {
			loggedIn: false,
			loading: true,
			countLectures: 0,
			name: "",
			lastname: "",
			snackbar: false,
			errorMessage: "",
			headers: [
				{
					text: "Název přednášky",
					align: "start",
					sortable: false,
					value: "title"
				},
				{ text: "Firma", sortable: false, value: "company" },
				{ text: "Čas", value: "time" },
				{ text: "Místo", sortable: false, value: "place" },
				{ text: "Počet", sortable: false, value: "viewers" },
				{ text: "Akce", sortable: false, value: "actions" }
			],
			anyHeaders: [
				{
					text: "Název přednášky",
					align: "start",
					sortable: false,
					value: "title"
				},
				{ text: "Firma", sortable: false, value: "company" },
				{ text: "Čas", value: "time" },
				{ text: "Místo", sortable: false, value: "place" },
				{ text: "Počet", sortable: false, value: "viewers" }
			],
			lectures: [],
			anyLectures: []
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
		getMe() {
			axios
				.get("./api/me", this.getAuth())
				.then(resp => {
					if (resp.status === 200) {
						this.name = resp.data.user.name;
						this.lastname = resp.data.user.lastname;

						this.loggedIn = true;
					}
				})
				.catch(error => {
					if (error.response.status === 401) {
						localStorage.removeItem("access_token");

						this.loggedIn = false;
					}
				});
		},
		getAllLectures() {
			axios.get("./api/getAllLectures", this.getAuth()).then(resp => {
				if (resp.status === 200) {
					const that = this;
					this.lectures = resp.data.lectures;
					this.loading = false;
					this.countLectures = 0;
					this.lectures.forEach(function(item) {
						if (item.login === true) {
							that.countLectures++;
						}
					});
				}
			});
		},
		getLectures() {
			axios.get("./api/lectures").then(resp => {
				if (resp.status === 200) {
					this.anyLectures = resp.data.lectures;
					this.loading = false;
				}
			});
		},
		addLecture(id) {
			this.lectures.find(cur => cur.id === id).login = true;

			axios
				.post("./api/joinLecture/" + id, {}, this.getAuth())
				.then(resp => {
					if (resp.status === 200) {
						this.getAllLectures();
					}
				})
				.catch(error => {
					if (error.response.status === 403) {
						this.snackbar = true;
						this.errorMessage =
							"Tato přednáška je již plně obsazená";
						this.getAllLectures();
					}
				});
		},
		leftLecture(id) {
			const token = localStorage.getItem("access_token");

			const config = {
				headers: { Authorization: `Bearer ${token}` }
			};

			this.lectures.find(cur => cur.id === id).login = false;

			axios.post("./api/leftLecture/" + id, {}, config).then(resp => {
				if (resp.status === 200) {
					this.getAllLectures();
				}
			});
		}
	},
	mounted() {
		this.getMe();
		this.getLectures();
		this.getAllLectures();
	},
	computed: {
		fullName: function() {
			return this.name + " " + this.lastname;
		},
		formatText: function() {
			if (this.countLectures === 0) {
				return "aktuálně nemáš zapsanou žádnou přednášku";
			} else {
				if (this.countLectures === 1) {
					return (
						"aktuálně máš zapsanou " +
						this.countLectures +
						" přednášku"
					);
				} else {
					if (this.countLectures > 1 && this.countLectures < 5) {
						return (
							"aktuálně máš zapsané " +
							this.countLectures +
							" přednášky"
						);
					} else {
						if (this.countLectures >= 5) {
							return (
								"aktuálně máš zapsaných " +
								this.countLectures +
								" přednášek"
							);
						}
					}
				}
			}
		}
	}
};
</script>
