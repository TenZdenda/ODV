<template>
	<div>
		<Navbar></Navbar>
		<v-content>
			<v-container>
				<h2><i class="uil uil-setting"></i> | Nastavení</h2>
				<v-form class="mr-5 ml-5">
					<v-row wrap>
						<v-col
							cols="12"
							md="6"
							lg="6"
						>
							<h3>Obecné</h3>
							<v-text-field
								label="Název stránky"
								v-model="general.name"
							></v-text-field>
							<v-text-field
								label="x. ročník ODV"
								v-model="general.year"
							></v-text-field>
							<v-text-field
								label="Kontaktní e-mail"
								v-model="general.email"
							></v-text-field>
							<v-text-field
								label="Kontaktní číslo"
								v-model="general.number"
							></v-text-field>
							<v-text-field
								label="Adresa"
								v-model="general.address"
							></v-text-field>
							<v-file-input
								label="Nahrát logo"
								@change="getBase64"
							></v-file-input>
						</v-col>
						<v-col
							cols="12"
							md="6"
							lg="6"
						>
							<h3>Sociální sítě</h3>
							<v-text-field
								label="Facebook"
								v-model="socialmedia.facebook"
							></v-text-field>
							<v-text-field
								label="Instagram"
								v-model="socialmedia.instagram"
							></v-text-field>
							<v-text-field
								label="Twitter"
								v-model="socialmedia.twitter"
							></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col
							cols="12"
							md="6"
							lg="6"
						>
							<h3>Konktatní formulář</h3>
							<v-text-field
								label="Kontaktní e-mail adresa"
								v-model="contactform.email"
							></v-text-field>
							<v-switch
								label="Kontaktní formulář"
								v-model="contactform.showform"
							></v-switch>
						</v-col>
					</v-row>
					<v-btn
						depressed
						@click="saveSettings"
					>Uložit</v-btn>
				</v-form>
			</v-container>
		</v-content>
		<v-snackbar
			v-model="snackbar"
			:color="color"
		>
			{{ text }}
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
import Navbar from "../../components/Navbar";
export default {
	components: {
		Navbar
	},
	data() {
		return {
			snackbar: false,
			text: "",
			color: "success",
			general: {
				name: "",
				year: "",
				email: "",
				number: "",
				address: "",
				logo: ""
			},
			socialmedia: {
				facebook: "",
				instagram: "",
				twitter: ""
			},
			contactform: {
				email: "",
				showform: ""
			},
			base64: ""
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
		getSettings() {
			axios.get("./api/settings").then(resp => {
				if (resp.status === 200) {
					this.general = resp.data.settings.general;
					this.socialmedia = resp.data.settings.socialmedia;
					this.contactform = resp.data.settings.contactform;
				}
			});
		},
		getBase64(file) {
			let base64 = "";
			const reader = new FileReader();
			reader.onloadend = f => {
				this.base64 = reader.result;
			};

			if (file) {
				reader.readAsDataURL(file);
			}
		},
		saveSettings() {
			axios
				.post(
					"./api/settings",
					{
						name: this.general.name,
						year: this.general.year,
						email: this.general.email,
						number: this.general.number,
						address: this.general.address,
						logo: this.base64,
						facebook: this.socialmedia.facebook,
						instagram: this.socialmedia.instagram,
						twitter: this.socialmedia.twitter,
						contact_email: this.contactform.email,
						show_contact: this.contactform.showform
					},
					this.getAuth()
				)
				.then(resp => {
					if (resp.status === 200) {
						this.text = "Nastavení bylo uloženo! 🙋‍♂️";
						this.color = "success";
						this.snackbar = true;

                        this.$store.dispatch('setAccessToken', localStorage.getItem('access_token'))
                        if (localStorage.getItem('access_token')) {
                            this.$store.dispatch('setSettings')
                        }
					}
				})
				.catch(error => {
					console.log(error.response.status);
				});
		}
	},
	mounted() {
		this.getSettings();
	}
};
</script>
