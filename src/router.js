import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import User from "./pages/User.vue";
import UserProfile from "./pages/UserProfile.vue";
import Chart from "./pages/Chart.vue";
import Filter from "./pages/Filter.vue";
import Search from "./pages/Search.vue";
import Pagination from "./pages/Pagination.vue";
import Props from "./pages/Props.vue";
import Form from "./pages/Form.vue";
import Ref from "./pages/Ref.vue";
import DataTables from "./pages/DataTables.vue";
import Upload from "./pages/Upload.vue";
import I18n from "./pages/I18n.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/user", component: User },
  { path: "/user/:id", component: UserProfile },
  { path: "/chart", component: Chart },
  { path: "/filter", component: Filter },
  { path: "/search", component: Search },
  { path: "/Pagination", component: Pagination },
  { path: "/Props", component: Props },
  { path: "/Form", component: Form },
  { path: "/Ref", component: Ref },
  { path: "/DataTables", component: DataTables },
  { path: "/Upload", component: Upload },
  { path: "/I18n", component: I18n },
  { path: "*", component: PageNotFound }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

export default router;
