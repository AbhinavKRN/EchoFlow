const express = require('express');
const { uploadVoiceFile, getVoiceFile } = require('../controllers/storageController');
const { protect } = require('../middleware/auth');
const { upload } = require('../middleware/fileValidator');
const router = express.Router();

router.post('/upload', protect, upload.single('file'), uploadVoiceFile);
router.get('/file/:fileId', getVoiceFile);

module.exports = router;