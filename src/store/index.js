import { createStore } from "vuex";

import auth from "@/store/auth";
import infoUser from "./infoUser";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    infoUser,
  },
});
