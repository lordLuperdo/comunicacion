import { supabase } from "./supabaseconfig";

export const queryByCollection = async (table) => {
    const { data, error } = await supabase
      .from(table)
      .select('*');
  
    if (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  
    return data;
  };