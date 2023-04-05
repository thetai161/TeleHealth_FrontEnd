import axios from "axios";
export default {
  async login(context, payload) {
    await context.commit("login", payload);
  },
  async logout(context) {
    await context.commit("logout");
  },
  async refreshAccessToken(context) {
    const refreshToken = context.state.refresh;
    console.log(refreshToken);
    axios.get("");
  },
  async role(context, payload) {
    await context.commit("role", payload);
  },
};
