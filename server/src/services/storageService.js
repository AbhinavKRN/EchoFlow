const { supabase } = require('../config/supabase');
const { STORAGE_BUCKETS } = require('../config/constants');
const { ErrorResponse } = require('../utils/errorResponse');

exports.uploadFile = async (file) => {
  try {
    const filename = `${Date.now()}-${file.originalname}`;
    
    const { data, error } = await supabase.storage
      .from(STORAGE_BUCKETS.VOICE_INPUTS)
      .upload(filename, file.buffer, {
        contentType: file.mimetype
      });

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from(STORAGE_BUCKETS.VOICE_INPUTS)
      .getPublicUrl(filename);

    return { path: data.path, publicUrl };
  } catch (error) {
    throw new ErrorResponse('File upload failed', 500);
  }
};

exports.getFile = async (fileId) => {
  try {
    const { data, error } = await supabase.storage
      .from(STORAGE_BUCKETS.VOICE_OUTPUTS)
      .download(fileId);

    if (error) throw error;
    return data;
  } catch (error) {
    throw new ErrorResponse('File not found', 404);
  }
};