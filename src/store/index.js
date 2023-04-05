import { createStore } from "vuex";
import authModules from "./auth/index.js";
const store = createStore({
  modules: {
    auth: authModules,
  },
});

export default store;
