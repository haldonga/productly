import {createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: 'en',
    messages: {
        en: {
            button:{
                SignIn: 'Sign In',
                SignUp: 'Sign Up'
            }
        }
    }
})

export default i18n