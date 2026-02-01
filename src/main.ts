import { PiniaColada } from "@pinia/colada";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import "./assets/base.css";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

app.use(PiniaColada, {
  pinia,
  queryOptions: {
    gcTime: 300_000, // 5 minutes, the default
  },
});

app.mount("#app");
