import Vue from "vue";
import Vuex from "vuex";
import { loggedInUser } from "./mutations";
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    user: {},
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key = "c2g-consulting", value) =>
          Cookies.set(key ? "c2g-consulting" : "c2g-consulting", value, {
            expires: 1,
          }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  ],
  mutations: {
    [loggedInUser]: (state, user) => {
      state.user = { ...state.user, ...user };
    },
  },
});

export default store;
