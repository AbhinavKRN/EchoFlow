export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_AUDIO_TYPES = ['audio/wav', 'audio/mpeg', 'audio/mp3'];
export const MAX_TEXT_LENGTH = 500;

export const SUPABASE_BUCKETS = {
  VOICE_INPUTS: 'voice-inputs',
  VOICE_OUTPUTS: 'voice-outputs'
};

export const API_ENDPOINTS = {
  VOICE_PROCESS: '/api/voice/process',
  VOICE_STATUS: '/api/voice/status'
};

export const ERROR_MESSAGES = {
  FILE_TOO_LARGE: 'File size must be less than 5MB',
  INVALID_FILE_TYPE: 'Invalid file type. Please upload a WAV or MP3 file',
  UPLOAD_FAILED: 'Failed to upload file. Please try again',
  PROCESSING_FAILED: 'Voice processing failed. Please try again'
};