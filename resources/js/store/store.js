import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        accessToken: '',
        user: {},
        settings: {},
    },
    mutations: {
        SET_ACCESS_TOKEN(state, accessToken) {
            state.accessToken = accessToken
        },
        SET_USER(state, user) {
            state.user = user
        },
        SET_SETTINGS(state, settings) {
            state.settings = settings
        }
    },
    actions: {
        setAccessToken({ commit }, accessToken){
            commit('SET_ACCESS_TOKEN', accessToken)
            if (localStorage.getItem("access_token") !== accessToken){
                localStorage.setItem("access_token", accessToken)
            }
        },
        setUser({ commit, state }) {
            if (!state.user.id || !state.user.name || !state.user.lastname) {
                axios.get("./api/me", {headers: {Authorization: `Bearer ${state.accessToken}`}}).then((resp) => {
                    if (resp.status === 200) {
                        commit('SET_USER', resp.data.user)
                    }
                }).catch((error) => {
                    localStorage.removeItem("access_token")
                    commit('SET_ACCESS_TOKEN', '')
                    this.$router.push({name: 'login'})
                })
            }
        },
        clearUser({commit}) {
            commit('SET_USER', {})
        },
        setSettings({ commit, state }) {
            if (!state.settings.general || !state.settings.contactform) {
                axios.get("./api/settings").then((resp) => {
                    if (resp.status === 200) {
                        commit('SET_SETTINGS', resp.data.settings)
                    }
                })
            }
        },
        reloadUser({ commit, state }) {
            axios.get("./api/me", {headers: {Authorization: `Bearer ${state.accessToken}`}}).then((resp) => {
                if (resp.status === 200) {
                    commit('SET_USER', resp.data.user)
                }
            }).catch((error) => {
                localStorage.removeItem("access_token")
                commit('SET_ACCESS_TOKEN', '')
                this.$router.push({name: 'login'})
            })
        },
    },
    getters: {
        getAccessToken: (state) => {
            return state.accessToken;
        },
        loggedIn: (state) => {
            return !!state.accessToken
        },
        getUser: (state) => {
            return state.user
        },
        getSettings: (state) => {
            if (state.settings.general && state.settings.contactform) {
                return state.settings
            }

            return undefined
        }
    }
})
