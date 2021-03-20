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
						<h1 class="ml-5 mt-5 mb-5 text--primary">Přihlašte se do systému</h1>
						<v-form
							class="mr-5 ml-5"
							ref="form"
						>
							<v-text-field
								label="Email"
								v-model="email.value"
								:rules="emailRules"
								:error-messages="email.error"
								required
								v-on:keydown.enter.prevent="login"
							></v-text-field>
							<v-text-field
								label="Heslo"
								type="password"
								v-model="password.value"
								:rules="passwordRules"
								:error-messages="password.error"
								required
								v-on:keydown.enter.prevent="login"
							></v-text-field>

							<v-btn
								depressed
								block
								class="mt-5"
								:loading="loading"
								@click="login"
							>Přihlásit se</v-btn>
							<p class="text-center mt-2">Nemáš ještě účet? <a href="/register">Zaregistrovat se</a></p>
						</v-form>
					</v-card-text>
				</v-card>
			</v-row>
		</v-container>
	</v-content>
</template>
<script>
import logo from "../../img/vos_a_spse_plzen.png";

export default {
	data() {
		return {
			loading: false,
			email: {
				value: "",
				error: ""
			},
			password: {
				value: "",
				error: ""
			},
			errors: [],
			logo: logo,
			emailRules: [v => !!v || "E-mail je povinný"],
			passwordRules: [v => !!v || "Heslo je povinné"]
		};
	},
	methods: {
		login() {
			if (this.$refs.form.validate()) {
				this.loading = true;
				axios
					.post("./api/login", {
						email: this.email.value,
						password: this.password.value
					})
					.then(resp => {
						if (resp.status === 200) {
							this.loading = false;
							this.$store.dispatch(
								"setAccessToken",
								resp.data.token
							);
							this.$store.dispatch("setUser");

							this.$router.push({ name: "dashboard" });
						}
					})
					.catch(error => {
						if (error.response.status === 401) {
							this.loading = false;
							this.email.error = error.response.data.errors.email;
							this.password.error = error.response.data.errors.password;
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
