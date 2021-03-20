<template>
	<v-content>
		<v-container
			fluid
			fill-height
		>
			<v-row
				align="center"
				justify="center"
			>
				<v-card
					class="mx-auto"
					width="600"
				>
					<v-card-text>
						<h1 class="mt-5 ml-5 mb-5 text--primary">Registrace</h1>
						<v-form
							class="ml-5 mr-5"
							ref="form"
						>
							<v-text-field
								label="Jméno"
								:rules="nameRules"
								required
								v-model="name"
								v-on:keydown.enter.prevent="register"
							></v-text-field>
							<v-text-field
								label="Přijmení"
								:rules="lastNameRules"
								required
								v-model="lastname"
								v-on:keydown.enter.prevent="register"
							></v-text-field>
							<v-text-field
								label="Email"
								type="email"
								:rules="emailRules"
								required
								v-model="email"
								v-on:keydown.enter.prevent="register"
							></v-text-field>
							<v-text-field
								label="Heslo"
								type="password"
								:rules="passwordRules"
								required
								v-model="password"
								v-on:keydown.enter.prevent="register"
							></v-text-field>

							<v-btn
								depressed
								block
								class="mt-5"
								:loading="loading"
								@click="register"
							>Registrovat se</v-btn>
							<p class="text-center mt-2">Již máš účet? <a href="/login">Přihlásit se</a></p>
						</v-form>
					</v-card-text>
				</v-card>
			</v-row>
		</v-container>
	</v-content>
</template>
<script>
export default {
	data() {
		return {
			name: "",
			lastname: "",
			email: "",
			password: "",
			loading: false,
			errors: [],
			emailRules: [
				v => !!v || "E-mail je povinný",
				v => /.+@.+\..+/.test(v) || "E-mail musí být validní"
			],
			nameRules: [v => !!v || "Jméno je povinné"],
			lastNameRules: [v => !!v || "Přijmení je povinné"],
			passwordRules: [
				v => !!v || "Heslo je povinné",
				v => v.length >= 8 || "Heslo musí mít minimálně 8 znaků"
			]
		};
	},
	methods: {
		register() {
			if (this.$refs.form.validate()) {
				this.loading = true;
				axios
					.post("./api/register", {
						name: this.name,
						lastname: this.lastname,
						email: this.email,
						password: this.password
					})
					.then(resp => {
						if (resp.status === 200) {
							this.$store.dispatch(
								"setAccessToken",
								resp.data.token
							);
							this.$store.dispatch("setUser");

							this.loading = false;
							this.$router.push({ name: "dashboard" });
						}
					})
					.catch(error => {
						if (error.response.status === 401) {
							this.errors = error.response.data.errors;
						}
					});
			}
		}
	},
	mounted() {
		if (localStorage.getItem("access_token")) {
			this.$router.push({ name: "dashboard" });
		}
	}
};
</script>
