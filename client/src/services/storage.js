// src/services/storage.js
import { supabase } from '../config/supabase';
import { SUPABASE_BUCKETS } from '../config/constants';

export const uploadToStorage = async (file, bucket = SUPABASE_BUCKETS.VOICE_INPUTS) => {
  const filename = `${Date.now()}-${file.name}`;
  
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filename, file);

  if (error) throw error;
  return data;
};

export const getPublicUrl = (path, bucket = SUPABASE_BUCKETS.VOICE_OUTPUTS) => {
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path);
  
  return data.publicUrl;
};