import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { NAME, ROOT_URL } from "@/constants";
import { useHead } from "unhead";

const routes = [
  {
    path: "/",
    name: "",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/mission",
    name: "mission",
    component: () => import("../views/MissionView.vue"),
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("../views/PortfolioView.vue"),
  },
  {
    path: "/resume",
    name: "resume",
    component: () => import("../views/ResumeView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../components/Sidebar.vue"),
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
  useHead({
    link: [
      {
        rel: "canonical",
        href: ROOT_URL + to.path,
      },
    ],
  });
  next();
});

router.afterEach(() => {
  const el = document.getElementById("pageContent");
  el.scrollTop = 0;
});

export default router;
