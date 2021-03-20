<template>
	<div>
		<Navbar></Navbar>
		<v-content>
			<v-container v-if="user.role == 'admin'">
				<v-row wrap>
					<v-col
						cols="12"
						lg="4"
						md="4"
					>
						<v-card class="dashboard-card">
							<v-card-title>Návštěvnost</v-card-title>
							<v-card-text>
								<v-sparkline
									:value="value"
									:smooth="radius || false"
									:padding="padding"
									:line-width="width"
									:fill="fill"
									:type="type"
									:auto-line-width="autoLineWidth"
									auto-draw
									class="graph"
								></v-sparkline>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col
						cols="12"
						lg="4"
						md="4"
					>
						<v-card class="dashboard-card">
							<v-card-title>Počet přednášek</v-card-title>
							<v-card-text>
								<h2
									class="text-center text-black-50 mt-3"
									style="font-size: 50px"
								>{{ countLectures }}</h2>
								<p class="text-center text-muted mt-3">{{ formatCount }}</p>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col
						cols="12"
						lg="4"
						md="4"
					>
						<v-card class="dashboard-card">
							<v-card-title>Počet partnerů</v-card-title>
							<v-card-text>
								<h2
									class="text-center text-black-50 mt-3"
									style="font-size: 50px"
								>{{ countPartners }}</h2>
								<p class="text-center text-muted mt-3">{{ formatPartner }}</p>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
				<v-row wrap>
					<v-col cols="12">
						<v-card>
							<v-card-title>Nejoblíbenější přednášky</v-card-title>
							<v-card-text>
								<v-data-table
									:headers="headers"
									:items="bestLectures"
									:items-per-page="5"
									class="elevation-1"
									no-data-text="Zatím tu nic není"
								></v-data-table>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
			<v-container v-else>
				<h2 class="mt-5 mb-5">Tvé zapsané přednášky</h2>

				<v-row wrap>
					<v-col
						col="12"
						lg="12"
						md="12"
					>
						<v-data-table
							:headers="studentHeaders"
							:items="lectures"
							:items-per-page="5"
							class="elevation-1"
							no-data-text="Zatím tu nic není"
						>
							<template v-slot:item.actions="{ item }">
								<a @click="leftLecture(item.id)">Odhlásit se</a>
							</template>
						</v-data-table>
					</v-col>
				</v-row>
			</v-container>
		</v-content>
	</div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import { mapGetters } from "vuex";

export default {
	components: {
		Navbar
	},
	data() {
		return {
			width: 3,
			radius: 10,
			padding: 8,
			value: [0, 2, 5, 9, 5, 10, 3, 5, 5, 10, 1, 8, 2, 9, 0],
			fill: false,
			type: "trend",
			autoLineWidth: false,
			lectures: [],
			bestLectures: [],
			countLectures: 0,
			countPartners: 0,
			headers: [
				{
					text: "Název přednášky",
					align: "start",
					sortable: false,
					value: "title"
				},
				{ text: "Firma", sortable: false, value: "company" },
				{ text: "Čas", value: "time" },
				{ text: "Místo", sortable: false, value: "place" }
			],
			studentHeaders: [
				{
					text: "Název přednášky",
					align: "start",
					sortable: false,
					value: "title"
				},
				{ text: "Firma", sortable: false, value: "company" },
				{ text: "Čas", value: "time" },
				{ text: "Místo", sortable: false, value: "place" },
				{ text: "Akce", sortable: false, value: "actions" }
			]
		};
	},
	methods: {
		getAuth() {
			const config = {
				headers: { Authorization: `Bearer ${this.getAccessToken}` }
			};

			return config;
		},
		getMyLectures() {
			axios.get("./api/getMyLecture", this.getAuth()).then(resp => {
				if (resp.status === 200) {
					this.lectures = resp.data.lectures;
				}
			});
		},
		getStats() {
			axios.get("./api/stats", this.getAuth()).then(resp => {
				if (resp.status === 200) {
					this.bestLectures = resp.data.response.bestLectures;
					this.countLectures = resp.data.response.countLectures;
					this.countPartners = resp.data.response.countPartners;
				}
			});
		},
		leftLecture(id) {
			axios
				.post("./api/leftLecture/" + id, {}, this.getAuth())
				.then(resp => {
					if (resp.status === 200) {
						this.getMyLectures();
					}
				});
		}
	},
	mounted() {
		this.$store.dispatch(
			"setAccessToken",
			localStorage.getItem("access_token")
		);
		if (localStorage.getItem("access_token")) {
			this.$store.dispatch("setUser");
		}
		this.getMyLectures();
		this.getStats();
	},
	computed: {
		...mapGetters(["getAccessToken"]),
		user: function() {
			return this.$store.getters.getUser;
		},
		formatCount: function() {
			if (this.countLectures === 0 || this.countLectures >= 5) {
				return "Přednášek";
			} else {
				if (this.countLectures === 1) {
					return "Přednášku";
				} else {
					if (this.countLectures > 1 && this.countLectures < 5) {
						return "Přednášky";
					}
				}
			}
		},
		formatPartner: function() {
			if (this.countPartners === 0 || this.countPartners >= 5) {
				return "Partnerů";
			} else {
				if (this.countPartners === 1) {
					return "Partner";
				} else {
					if (this.countPartners > 1 && this.countPartners < 5) {
						return "Partneři";
					}
				}
			}
		}
	}
};
</script>
