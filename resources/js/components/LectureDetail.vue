<template>
    <v-row justify="center">
        <v-dialog v-model="open" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="close">
                        <i class="uil uil-times"></i>
                    </v-btn>
                    <v-toolbar-title>{{ item.title }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                    </v-toolbar-items>
                </v-toolbar>
                <v-container>
                    <h2 class="mt-5">Základní informace o přednášce</h2>
                    <v-row>
                        <v-col lg="4" md="6" sm="12" cols="12">
                            <h3>Název přednášky</h3>
                            <p>{{ item.title }}</p>
                        </v-col>
                        <v-col lg="4" md="6" sm="12" cols="12">
                            <h3>Název firmy</h3>
                            <p>{{ item.company }}</p>
                        </v-col>
                        <v-col lg="4" md="6" sm="12" cols="12">
                            <h3>Čas přednášky</h3>
                            <p>{{ item.time }}</p>
                        </v-col>
                        <v-col lg="4" md="6" sm="12" cols="12">
                            <h3>Místo přednášky</h3>
                            <p>{{ item.place }}</p>
                        </v-col>
                        <v-col lg="4" md="6" sm="12" cols="12">
                            <h3>Přihlášených diváků / max. počet diváků</h3>
                            <p>{{ item.loggedUsers }} / {{ item.viewers }}</p>
                        </v-col>
                    </v-row>
                </v-container>
                <v-divider></v-divider>
                <v-container>
                    <v-row>
                        <v-col lg="4" md="4" sm="12" cols="12">
                            <h2 class="mt-5">Akce</h2>
                            <ul>
                                <li>Aktuálně nejsou žádné akce dostupné</li>
                            </ul>
                        </v-col>
                        <v-col lg="8" md="8" sm="12" cols="12">
                            <h2 class="mt-5 mb-5">Přihlášení žáci <small class="grey--text">(Celkem {{ loggedUsers.length }} žáků)</small></h2>
                            <v-data-table
                                :headers="headers"
                                :items="loggedUsers"
                                :items-per-page="5"
                                class="elevation-1"
                            ></v-data-table>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                headers: [
                    {
                        text: 'ID žáka',
                        align: 'start',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Jméno žáka', value: 'name' },
                    { text: 'Příjmení žáka', value: 'lastname' },
                ],

            }
        },
        props: ["open", "item", "loggedUsers"],
        methods: {
            close() {
                this.$emit("close", false)
            }
        }
    }
</script>
