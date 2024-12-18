import { MAX_FILE_SIZE, ALLOWED_AUDIO_TYPES } from '../config/constants';

export const validateVoiceFile = (file) => {
  const errors = [];

  if (file.size > MAX_FILE_SIZE) {
    errors.push('File size must be less than 5MB');
  }

  if (!ALLOWED_AUDIO_TYPES.includes(file.type)) {
    errors.push('File type not supported. Please upload WAV or MP3 files.');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};