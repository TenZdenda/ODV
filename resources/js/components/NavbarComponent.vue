<template>
    <nav>
        <v-navigation-drawer v-model="drawer" app class="navbar hidden-md-and-up">
            <router-link to="/edit-profile" v-if="user">
                <v-layout column align-center>
                    <v-flex class="mt-5">
                        <v-avatar size="75">
                            <img :src="user.avatar.path" alt="Profilovka" v-if="user.avatar">
                            <img :src="avatar" alt="Profilovka" v-else>
                        </v-avatar>
                    </v-flex>
                    <p class="mt-2 black--text">Ahoj, {{ user.name }}</p>
                </v-layout>
            </router-link>
            <v-list>
                <v-list-item-group>
                    <v-list-item v-for="link in links" :key="link.id" router :to="link.route">
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ link.title }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>

            <v-spacer></v-spacer>
            <v-layout column align-center v-if="!user">
                <v-flex class="mt-5">
                    <v-btn text>
                        Přihlásit se
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-navigation-drawer>
        <v-toolbar>
            <v-toolbar-title class="mr-10"><img :src="settings.general.logo" alt="VOŠ a SPŠE Plzeň" height="40px"></v-toolbar-title>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="link in links" :key="link.id" :to="link.route" text>
                    {{ link.title }}
                </v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>
            <div v-if="user" class="hidden-sm-and-down">
                <v-avatar>
                    <img :src="user.avatar.path" alt="Profilovka" v-if="user.avatar">
                    <img :src="avatar" alt="Profilovka" v-else>
                </v-avatar>
                <v-btn text to="dashboard">
                    Ahoj, {{ user.name }}
                </v-btn>
            </div>
            <div v-else>
                <v-btn text to="login">
                    Přihlásit se
                </v-btn>
            </div>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        </v-toolbar>
    </nav>
</template>

<script>

    import profilePic from '../../img/profile-pic.png'
    import logo from '../../img/vos_a_spse_plzen.png'

    export default {
        data() {
            return {
                menu: false,
                name: '',
                avatar: profilePic,
                drawer: null,
                links: [
                    {
                        id: 0,
                        title: "Domů",
                        route: "/",
                    },
                    {
                        id: 1,
                        title: "Zapsat si přednášku",
                        route: "/lectures",
                    },
                    {
                        id: 2,
                        title: "Dotazy",
                        route: "/faq",
                    }
                ],
            }
        },
        methods: {},
        mounted() {
            this.$store.dispatch('setAccessToken', localStorage.getItem('access_token'))
            if (localStorage.getItem('access_token')) {
                this.$store.dispatch('setUser')
                this.$store.dispatch('setSettings')
            }
        },
        computed: {
            user: function () {
                return this.$store.getters.getUser
            },
            settings: function () {
                return this.$store.getters.getSettings
            }
        },
    }
</script>
