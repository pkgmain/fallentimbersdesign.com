import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import routerOptions from "./router";
import "./index.css";

export const createApp = ViteSSG(App, routerOptions);
