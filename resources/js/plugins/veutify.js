import Vue from "vue"
import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css"

// @ts-ignore
import cs from 'vuetify/lib/locale/cs';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: { cs },
        current: 'cs',
    },
    icons: {
        iconfont: 'mdiSvg'
    },
    theme: {
        themes: {
            light: {
                primary: "#ffa41b",
                secondary: "#000839",
                navbar: "#fff",
                font: "#ffffff",
                success: "#4FC879",
                info: "#ffaa2c",
                error: "#f83e70"
            }
        }
    }
});
