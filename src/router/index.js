import routes from "./routes";
import { createWebHistory } from "vue-router";

export default {
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    return { top: 0 };
  },
};
