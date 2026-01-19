import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { NAME, ROOT_URL } from "@/constants";
import { useHead } from "@unhead/vue";

const routes = [
  {
    path: "/",
    name: "",
    component: HomeView,
  },
  {
    path: "/experience",
    name: "experience",
    component: () => import("../views/ExperienceView.vue"),
  },
  {
    path: "/education",
    name: "education",
    component: () => import("../views/EducationView.vue"),
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
    component: () => import("../components/SideBar.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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

router.goLeft = function () {
  let index = router.getIndex();
  router.goIndex(index - 1);
};

router.goRight = function () {
  let index = router.getIndex();
  router.goIndex(index + 1);
};

router.getIndex = function () {
  let currentPath = this.currentRoute.value.path;
  return routes.findIndex((route) => route.path === currentPath);
};

router.goIndex = function (index) {
  if (index >= 0 && index < routes.length && router.isTouchDevice) {
    let path = routes[index].path;
    this.push(path);
  }
};

router.isTouchDevice = "ontouchstart" in window || window.DocumentTouch;

export default router;
