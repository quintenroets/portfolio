import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { NAME } from "@/constants";

const routes = [
  {
    path: "/",
    name: "",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/mission",
    name: "mission",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MissionView.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProjectsView.vue"),
  },
  {
    path: "/resume",
    name: "resume",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ResumeView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Sidebar.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  let title = to.name;
  title = title.charAt(0).toUpperCase() + title.slice(1);
  if (title) {
    title = " - " + title;
  }
  document.title = NAME + title;
  next();
});

router.afterEach(() => {
  const el = document.getElementById("pagecontent");
  el.scrollTop = 0;
});

export default router;
