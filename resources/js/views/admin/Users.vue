<template>
	<div>
		<Navbar></Navbar>
		<v-content>
			<v-container>
				<v-row wrap>
					<v-col
						cols="12"
						lg="12"
					>
						<v-card>
							<v-card-title>
								Zaregistrovaný uživatelé
								<v-spacer></v-spacer>
								<v-text-field
									v-model="search"
									append-icon="mdi-magnify"
									label="Vyhledat"
									single-line
									hide-details
								></v-text-field>
							</v-card-title>
							<v-data-table
								:headers="headers"
								:items="users"
								:search="search"
								:loading="loading"
								loading-text="Načítání... Prosím počkejte"
							></v-data-table>
						</v-card>
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
			loading: true,
			search: "",
			headers: [
				{
					text: "Jméno",
					align: "start",
					sortable: true,
					value: "name"
				},
				{
					text: "Přijmení",
					sortable: true,
					value: "lastname"
				},
				{
					text: "Email",
					sortable: false,
					value: "email"
				},
				{
					text: "Zaregistrovaný",
					sortable: false,
					value: "created_at"
				}
			],
			users: []
		};
	},
	methods: {
		getAuth() {
			const config = {
				headers: { Authorization: `Bearer ${this.getAccessToken}` }
			};

			return config;
		},
		getAllUsers() {
			axios
				.get("./api/user", this.getAuth())
				.then(resp => {
					if (resp.status === 200) {
						this.users = resp.data.users;
						this.loading = false;
					}
				})
				.catch(error => {
					this.loading = false;
				});
		}
	},
	mounted() {
		this.$store.dispatch(
			"setAccessToken",
			localStorage.getItem("access_token")
		);
		this.getAllUsers();
	},
	computed: {
		...mapGetters(["getAccessToken", "getRole"])
	}
};
</script>
