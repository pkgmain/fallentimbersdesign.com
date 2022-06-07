import routes from "./routes";
import { createMemoryHistory, createWebHistory } from "vue-router";

export default {
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    return { top: 0 };
  },
};
