const express = require('express');
const { processVoiceFile } = require('../controllers/voiceController');
const { protect } = require('../middleware/auth');
const router = express.Router();

// Process voice route
router.post('/process', protect, processVoiceFile);

module.exports = router;