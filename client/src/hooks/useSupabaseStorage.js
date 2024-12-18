import { useCallback } from 'react';
import { supabase } from '../config/superbase';
import { SUPABASE_BUCKETS } from '../config/constants';

export const useSupabaseStorage = () => {
  const uploadFile = useCallback(async (file) => {
    try {
      const filename = `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage
        .from(SUPABASE_BUCKETS.VOICE_INPUTS)
        .upload(filename, file);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Upload error:', error);
      throw new Error('Failed to upload file');
    }
  }, []);

  const getPublicUrl = useCallback((path) => {
    try {
      const { data } = supabase.storage
        .from(SUPABASE_BUCKETS.VOICE_OUTPUTS)
        .getPublicUrl(path);
      
      return data.publicUrl;
    } catch (error) {
      console.error('Get URL error:', error);
      throw new Error('Failed to get file URL');
    }
  }, []);

  return { uploadFile, getPublicUrl };
};