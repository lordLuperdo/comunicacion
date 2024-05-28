import { supabase } from "./supabaseconfig";

export const queryByCollection = async () => {
    const { data , error } = await supabase
      .from('total')
      .select('*');
       console.log('data total',data)
    if (error) {
      console.error('Error con la ***** data:', error);
      return [];
    }
  
    return data;
  };