import { supabase } from "@/lib/supabaseClient.js";

export default {
  actions: {
    async registerUser({ dispatch, commit }, { email, pass, name }) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: pass,
        });
        await supabase
          .from("users")
          .insert({ id: data.user.id, name: name, email: email });
      } catch (e) {
        throw e;
      }
    },
    async loginUser({ dispatch, commit }, { email, pass }) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: pass,
      });
      if (error) {
        throw error;
      }
    },
    async singOut({ dispatch }) {
      const { error } = await supabase.auth.signOut();
    },
    async getUser({ dispatch }) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      return user;
    },
  },
};
