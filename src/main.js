import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import "tw-elements";
import { createPinia } from 'pinia'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia())
app.use(router);
app.mount("#app");
