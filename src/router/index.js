import { createRouter, createWebHashHistory } from "vue-router";
import homeComponent from "../views/homeComponent.vue";

export default  createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: homeComponent }
    ]
})