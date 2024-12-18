const multer = require('multer');
const { MAX_FILE_SIZE, ALLOWED_AUDIO_TYPES } = require('../config/constants');
const { ErrorResponse } = require('../utils/errorResponse');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (!ALLOWED_AUDIO_TYPES.includes(file.mimetype)) {
    cb(new ErrorResponse('Invalid file type', 400), false);
    return;
  }
  cb(null, true);
};

exports.upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE
  }
});