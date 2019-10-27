import { LOGIN } from "../utils/routes";

export const state = () => ({
  user: {},
  biller: ""
});

export const mutations = {
  SET_USER_DETAILS: (state, payload) => {
    state.user = payload;
  },

  UPDATE_USER_DETAILS: (state, payload) => {
    state.auth.user = payload;
  },

  LOGOUT: state => {
    state.user = undefined;
    state.auth = undefined;
  },

  SEARCHBILLER: (state, name) => {
    state.biller = name;
  }
};

export const actions = {
  async login() {
    await axios.post(LOGIN);
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit("LOGOUT");
      resolve();
    });
  },

  async deductBalance({ commit, state, getters }, amount) {
    await console.log(getters.getUser(), amount);
  },

  async refreshUser({ commit }) {
    await this.$axios
      .get("/me")
      .then(res => {
        commit("SET_USER_DETAILS", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const getters = {
  getUser(state) {
    return state.auth ? state.auth.user : null;
  },

  biller: state => state.biller
};
