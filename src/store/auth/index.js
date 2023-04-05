import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default {
  state() {
    return {
      email: "",
      tokens: null,
      username: "",
      role: "",
      id: "",
    };
  },
  getters,
  mutations,
  actions,
};
