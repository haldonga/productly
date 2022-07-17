import { createApp } from 'vue'
import App from './App.vue'
import Vue from "vue";
import i18n from "./i18n";

new Vue({
    i18n,
}).$mount('#app')
createApp(App).mount('#app')
