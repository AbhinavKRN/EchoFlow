module.exports = {
    MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
    ALLOWED_AUDIO_TYPES: ['audio/wav', 'audio/mpeg', 'audio/mp3'],
    STORAGE_BUCKETS: {
      VOICE_INPUTS: 'voice-inputs',
      VOICE_OUTPUTS: 'voice-outputs'
    },
    ERROR_CODES: {
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      NOT_FOUND: 404,
      INTERNAL_SERVER: 500
    },
    RATE_LIMIT: {
      WINDOW_MS: 15 * 60 * 1000, // 15 minutes
      MAX_REQUESTS: 100
    }
  };
  