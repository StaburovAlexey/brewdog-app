import { supabase } from "@/lib/supabaseClient.js";
export default {
  state: {
    user: {},
    isAuthenticated: false,
  },
  actions: {
    async getUser({ dispatch }) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        return null
      }
      return user;
    },
    async fetchInfoUser({ dispatch, commit }) {
      try {
        const user = await dispatch("getUser");
        const { data, error } = await supabase
          .from("users")
          .select()
          .eq("id", user[0].id);
        commit("setUser", data);
        console.log(error);
      } catch (e) {
        throw e;
      }
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    user: (s) => s.user,
  },
};
