import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Json from './languages/file.json'

Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'en',
    messages: {
        en: Json
    }
})

export default i18n