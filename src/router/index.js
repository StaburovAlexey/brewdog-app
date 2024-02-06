import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    meta: { layout: "form" },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "form" },
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/",
    name: "home",
    meta: { layout: "main", requiresAuth: true },
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: { layout: "main", requiresAuth: true },
    component: () => import("../views/ProfilePage.vue"),
  },
  {
    path: "/search",
    name: "search",
    meta: { layout: "main", requiresAuth: true },
    component: () => import("../views/SearchPage.vue"),
  },
  {
    path: "/favorite",
    name: "favorite",
    meta: { layout: "main", requiresAuth: true },
    component: () => import("../views/FavoritePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
