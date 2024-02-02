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
      return
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  }
};
