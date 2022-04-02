import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import $bus from "@/plugins/event-bus.js";

const app = createApp(App);
app.config.globalProperties.$bus = $bus;

app.mount("#app");
