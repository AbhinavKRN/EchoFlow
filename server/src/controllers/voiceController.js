const { processVoice } = require('../services/voiceService');
const asyncHandler = require('../utils/asyncHandler');
const { ErrorResponse } = require('../utils/errorResponse');

exports.processVoiceFile = asyncHandler(async (req, res) => {
  const { voicePath, text } = req.body;

  if (!voicePath || !text) {
    throw new ErrorResponse('Voice path and text are required', 400);
  }

  const result = await processVoice(voicePath, text);
  res.status(200).json({
    success: true,
    data: result
  });
});