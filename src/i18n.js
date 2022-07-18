import Json from './languages/file.json'
import {createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: 'en',
    messages: {
        en: Json
    }
})

export default i18n