import { supabase } from "@/lib/supabaseClient.js";

export default {
  actions: {
    async registerUser({ dispatch, commit }, { email, pass, name }) {
      try {
        const { data, error } = await supabase.auth.signup(email, pass);
        await supabase.from("users").insert({ id: data.user.id, name: name });
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
    getID() {
      return supabase.auth.getSession();
    },
  },
};
