const { MAX_FILE_SIZE, ALLOWED_AUDIO_TYPES } = require('../config/constants');
const { ErrorResponse } = require('./errorResponse');

exports.validateFile = (file) => {
  if (!file) {
    throw new ErrorResponse('No file provided', 400);
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new ErrorResponse('File too large', 400);
  }

  if (!ALLOWED_AUDIO_TYPES.includes(file.mimetype)) {
    throw new ErrorResponse('Invalid file type', 400);
  }
};