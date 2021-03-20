<template>
    <nav>
        <v-navigation-drawer v-model="drawer" app class="navbar">
            <router-link to="/edit-profile">
                <v-layout column align-center>
                    <v-flex class="mt-5">
                        <v-avatar size="75">
                            <img :src="user.avatar.path" alt="Profilovka" v-if="user.avatar">
                            <img :src="avatarPath" alt="Profilovka" v-else>
                        </v-avatar>
                    </v-flex>
                    <p class="mt-2 black--text">{{ user.name }} {{ user.lastname }}</p>
                </v-layout>
            </router-link>
            <v-list>
                <v-list-item-group>
                    <v-list-item v-for="link in links" :key="link.id" router :to="link.route">
                        <v-list-item-icon>
                            <i :class="link.icon"></i>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ link.title }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item v-for="adminLink in adminLinks" :key="adminLink.id" router :to="adminLink.route" v-if="user.role === 'admin'">
                        <v-list-item-icon>
                            <i :class="adminLink.icon"></i>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ adminLink.title }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar flat app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="font-weight-black">
                ODV
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text to="/">
                <i class="uil uil-home-alt"></i>
                Zpět
            </v-btn>
            <v-btn text @click="logout">
                <i class="uil uil-sign-out-alt"></i>
                Odhlásit se
            </v-btn>
        </v-app-bar>
    </nav>
</template>
<script>
    import profilePic from "../../img/profile-pic.png"

    export default {
        data() {
            return {
                avatarPath: profilePic,
                drawer: null,
                links: [
                    {
                        id: 0,
                        icon: "uil uil-tachometer-fast-alt",
                        title: "Dashboard",
                        route: "/dashboard",
                        role: "",
                    },
                ],
                adminLinks: [
                    {
                        id: 1,
                        icon: "uil uil-users-alt",
                        title: "Přehled studentů",
                        route: "/users",
                        role: "admin",
                    },
                    {
                        id: 3,
                        icon: "uil uil-graduation-cap",
                        title: "Přednášky",
                        route: "/show-lectures",
                        role: "admin",
                    },
                    {
                        id: 4,
                        icon: "uil uil-heart",
                        title: "Partneři",
                        route: "/partners",
                        role: "admin",
                    },
                    {
                        id: 5,
                        icon: "uil uil-chat-bubble-user",
                        title: "Tým",
                        route: "/team",
                        role: "admin",
                    },
                    {
                        id: 6,
                        icon: "uil uil-comment-alt-question",
                        title: "FAQ",
                        route: "/admin-faq",
                        role: "admin",
                    },
                    {
                        id: 7,
                        icon: "uil uil-star",
                        title: "Reference",
                        route: "/reference",
                        role: "admin",
                    },
                    {
                        id: 8,
                        icon: "uil uil-document-info",
                        title: "Dokumenty",
                        route: "/documents",
                        role: "admin",
                    },
                    {
                        id: 9,
                        icon: "uil uil-setting",
                        title: "Nastavení",
                        route: "/settings",
                        role: "admin",
                    }
                ]
            }
        },
        methods: {
            logout() {
                localStorage.removeItem("access_token")
                this.$store.dispatch("clearUser")
                this.$router.push('/')
            },
        },
        mounted() {
            this.$store.dispatch('setAccessToken', localStorage.getItem('access_token'))
            if (localStorage.getItem('access_token')) {
                this.$store.dispatch('setUser')
            }
        },
        computed: {
            user: function () {
                return this.$store.getters.getUser
            }
        }
    }
</script>

<style>
    .v-list-item__title{
        font-size: 1rem !important;
    }
</style>
