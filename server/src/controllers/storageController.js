const { uploadFile, getFile } = require('../services/storageService');
const { asyncHandler } = require('../utils/asyncHandler');
const { validateFile } = require('../utils/validators');

exports.uploadVoiceFile = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new ErrorResponse('No file uploaded', 400);
  }

  validateFile(req.file);
  const result = await uploadFile(req.file);
  res.status(200).json(result);
});

exports.getVoiceFile = asyncHandler(async (req, res) => {
  const { fileId } = req.params;
  const file = await getFile(fileId);
  res.status(200).json(file);
});