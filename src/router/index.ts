import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "weather",
      component: () => import("../views/WeatherApp.vue"),
    },
  ],
});

export default router;
