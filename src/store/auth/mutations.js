export default {
  login(state, payload) {
    state.email = payload.email;
    state.tokens = payload.tokens;
    state.username = payload.username;
    state.role = payload.role;
    state.idProfile = payload.idProfile;
    state.id = payload.id;
  },
  logout(state) {
    state.email = "";
    state.tokens = "";
    state.username = "";
    state.role = "";
    state.id = "";
    state.idProfile = "";
  },
  refreshAccessToken(state, payload) {
    state.tokens.access = payload.access;
  },
  role(state, payload) {
    state.role = payload;
  },
};
