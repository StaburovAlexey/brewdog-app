import { supabase } from "@/lib/supabaseClient.js";
import { reactive } from "vue";

export const store = {
  state: reactive({
    user: {},
  }),
};
