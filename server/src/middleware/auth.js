const { supabase } = require('../config/supabase');
const { ErrorResponse } = require('../utils/errorResponse');

exports.protect = async (req, res, next) => {
  try {
    if (process.env.NODE_ENV === 'development') {
      return next();
    }

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new ErrorResponse('Not authorized', 401);
    }

    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error || !user) {
      throw new ErrorResponse('Not authorized', 401);
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};