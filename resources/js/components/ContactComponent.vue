<template>
    <v-card height="auto" width="800" class="contact-card" flat>
        <div class="contact">
            <h2 class="pb-5">Zanechte nám vzkaz</h2>
            <v-form class="contact-form" ref="form">
                <v-text-field
                    label="Vaše jméno"
                    v-model="name.value"
                    :rules="nameRule"
                    :error-messages="name.error"
                ></v-text-field>
                <v-text-field
                    label="Vaše e-mailová adresa"
                    v-model="email.value"
                    :rules="emailRule"
                    :error-messages="email.error"
                ></v-text-field>
                <v-textarea
                    label="Vaše zpráva"
                    v-model="message.value"
                    :rules="messageRule"
                    :error-messages="message.error"
                    auto-grow
                ></v-textarea>

                <v-btn depressed block @click="sendEmail" :loading="loading">Odeslat e-mail</v-btn>
            </v-form>
        </div>
        <v-snackbar
            v-model="snackbar"
            success
        >
            Test
            <v-btn
                color="white"
                text
                @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                name: {
                    value: '',
                    error: ''
                },
                email: {
                    value: '',
                    error: ''
                },
                message: {
                    value: '',
                    error: ''
                },
                nameRule: [v => !!v || "Jméno je povinné"],
                emailRule: [v => !!v || "E-mail je povinný"],
                messageRule: [v => !!v || "Zpráva je povinná"],
                snackbar: false,
                loading: false
            }
        },
        methods: {
            sendEmail() {
                if (this.$refs.form.validate()) {
                    this.loading = true;
                    axios.post('./api/email', {
                        name: this.name.value,
                        email: this.email.value,
                        message: this.message.value
                    }).then((resp) => {
                        if (resp.status === 200) {
                            this.loading = false;
                            this.snackbar = true;
                        }
                    }).catch((error) => {
                        if (error.response.status === 401) {
                            this.loading = false;
                            this.email.error = error.response.data.errors.email;
                            this.name.error = error.response.data.errors.name;
                        }
                    })
                }
            }
        }
    }
</script>
