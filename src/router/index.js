import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { NAME } from "@/constants";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/resume",
    name: "resume",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ResumeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  let title = to.path.replace("/", "");
  title = title.charAt(0).toUpperCase() + title.slice(1);
  if (title) {
    title = " - " + title;
  }
  document.title = NAME + title;
  next();
});

export default router;
