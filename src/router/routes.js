import HomeView from "../views/HomeView.vue";

export default [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/benches",
    name: "benches",
    component: () => import("../views/BenchesView.vue"),
  },
  {
    path: "/signs",
    name: "signs",
    component: () => import("../views/SignsView.vue"),
  },
];
