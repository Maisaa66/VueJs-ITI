import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import dashboardPage from "./components/Pages/dashboard.vue"
import signupPage from "./components/Pages/signup.vue"
import profilePage from "./components/Pages/profile.vue"
import errorPage from "./components/Pages/error.vue"
import updatePage from './components/Pages/update.vue'
const routes = [
    { path: "/", component: dashboardPage, alias: "/home" },
    {path:"/profile/:id", component:profilePage},
    {path:"/signup", component:signupPage},
    {path:"/update/:id", component:updatePage},
    {        path:'/:NotFound(.*)*',
    component:errorPage,
    meta:{
        hideNavbar:true
    }}
  

];

const routers = createRouter({ history: createWebHistory(), routes });
createApp(App).use(routers).mount("#app");
