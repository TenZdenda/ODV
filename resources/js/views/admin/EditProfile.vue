<template>
	<div>
		<Navbar></Navbar>
		<v-content>
			<v-container>
				<div
					class="text-center"
					v-if="loading"
				>
					<v-progress-circular
						:size="50"
						color="primary"
						class="edit-progress"
						indeterminate
					></v-progress-circular>
				</div>
				<v-row
					wrap
					v-else
				>
					<v-col lg="4">
						<v-layout
							column
							align-center
						>
							<v-avatar size="200">
								<img
									:src="profile"
									alt=""
								>
							</v-avatar>
							<p class="mt-4 name">{{ firstName + " " + lastName }}</p>
							<p class="role">{{ user.role }}</p>
						</v-layout>
					</v-col>
					<v-col lg="8">
						<v-form>
							<h3>Upravení profilu</h3>
							<v-row>
								<v-col lg="5">
									<v-text-field
										label="Jméno"
										v-model="firstName"
									></v-text-field>
								</v-col>
								<v-col lg="5">
									<v-text-field
										label="Přijmení"
										v-model="lastName"
									></v-text-field>
								</v-col>
							</v-row>
							<v-row>
								<v-col lg="5">
									<v-text-field
										label="Email"
										v-model="email"
									></v-text-field>
								</v-col>
								<v-col lg="5">
									<v-file-input
										accept="image/*"
										label="Nahrát profilový obrázek"
										@change="getBase64"
									></v-file-input>
								</v-col>
							</v-row>
							<h3>Změna hesla</h3>
							<v-row>
								<v-col lg="5">
									<v-text-field
										label="Aktuální heslo"
										v-model="pass"
									></v-text-field>
								</v-col>
								<v-col lg="5">
									<v-text-field
										label="Nové heslo"
										v-model="newPass"
									></v-text-field>
								</v-col>
							</v-row>

							<v-btn
								depressed
								width="200"
								@click="editProfile"
							>Uložit</v-btn>
						</v-form>
					</v-col>
				</v-row>
			</v-container>
		</v-content>
	</div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import ProfilePic from "../../../img/profile-pic.png";
import { mapGetters } from "vuex";

export default {
	components: {
		Navbar
	},
	data() {
		return {
			loading: true,
			firstName: "",
			lastName: "",
			email: "",
			pass: "",
			newPass: "",
			profile: ProfilePic,
			base64: "",
			errors: []
		};
	},
	methods: {
		getAuth() {
			const config = {
				headers: { Authorization: `Bearer ${this.getAccessToken}` }
			};

			return config;
		},
		getMe() {
			axios.get("./api/me", this.getAuth()).then(resp => {
				console.log(resp);
				if (resp.status === 200) {
					this.firstName = resp.data.user.name;
					this.lastName = resp.data.user.lastname;
					this.email = resp.data.user.email;
					if (resp.data.user.avatar) {
						this.profile = resp.data.user.avatar.path;
					}
					this.loading = false;
				}
			});
		},
		editProfile() {
			this.uploadImage();
			axios
				.post(
					"./api/editMe",
					{
						name: this.firstName,
						lastname: this.lastName,
						email: this.email,
						pass: this.pass,
						newPass: this.newPass
					},
					this.getAuth()
				)
				.then(resp => {
					if (resp.status === 200) {
						this.getMe();
						this.$store.dispatch("reloadUser")
					}
				})
				.catch(error => {
					if (error.response.status === 401) {
						this.errors = error.response.data.errors;
					}
				});
		},
		getBase64(file) {
			let base64 = "";
			const reader = new FileReader();
			reader.onloadend = f => {
				this.base64 = reader.result;
				this.profile = reader.result;
			};

			if (file) {
				reader.readAsDataURL(file);
			}
		},
		uploadImage() {
			axios
				.post("./api/avatar", { avatar: this.base64 }, this.getAuth())
				.then(response => {
					if (reponse.status === 200) {
					}
				})
				.catch(error => {
					console.log(error);
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
		this.getMe();
	},
	computed: {
		...mapGetters(["getAccessToken"]),
		user: function() {
			return this.$store.getters.getUser;
		}
	}
};
</script>
