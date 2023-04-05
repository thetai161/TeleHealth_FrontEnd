export default {
  userId(state) {
    return state.id;
  },
  idProfile(state) {
    return state.idProfile;
  },
  accessToken(state) {
    if(state.tokens){
      return state.tokens.access;
    }
  },
  isAuthenticated(state) {
    return !!state.username;
  },
  email(state) {
    return state.email;
  },
  role(state) {
    return state.role;
  },

};
