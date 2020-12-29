import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CivilizationDetail from "../views/CivilizationDetail.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/civilizations/:civId",
		name: "CivilizationDetail",
		component: CivilizationDetail,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
