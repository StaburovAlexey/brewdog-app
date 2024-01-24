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
    meta: { layout: "main" },
    component: () => import("../views/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
