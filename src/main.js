// import { createApp } from 'vue'
import Vue from "vue";
import App from './App.vue'
import i18n from "./i18n";
import router from "./router";

new Vue({
    i18n,
    router,
    render: h => h(App)
}).$mount('#App')
//createApp(App).mount('#app')
