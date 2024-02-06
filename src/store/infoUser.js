import { supabase } from "@/lib/supabaseClient.js";
export default {
  state: {
    user: {},
  },
  actions: {
    async getUser({ dispatch }) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      return user;
    },
    async fetchInfoUser({ dispatch, commit }) {
      try {
        const user = await dispatch("getUser");
        const { data } = await supabase
          .from("users")
          .select()
          .eq("id", user.id);
        commit("setUser", data);
      } catch (e) {
        throw e;
      }
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = {};
    },
  },
  getters: {
    user: (s) => s.user,
  },
};
