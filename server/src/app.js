require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const voiceRoutes = require('./routes/voiceRoutes');
const { ErrorResponse } = require('./utils/errorResponse');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Voice Clone API Server' });
});

app.use('/api/voice', voiceRoutes);

// Handle 404
app.use((req, res, next) => {
  next(new ErrorResponse(`Not found - ${req.originalUrl}`, 404));
});

// Error handler
app.use((err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log for dev
  console.error(err);

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;