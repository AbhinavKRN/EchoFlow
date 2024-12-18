const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { RATE_LIMIT } = require('./constants');

const configureExpress = (app) => {
  app.use(helmet());
  app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  }));
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  const limiter = rateLimit({
    windowMs: RATE_LIMIT.WINDOW_MS,
    max: RATE_LIMIT.MAX_REQUESTS
  });
  app.use(limiter);
  
  return app;
};

module.exports = configureExpress;