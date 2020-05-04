//el stack es toda la informacion del error
const boom = require('@hapi/boom');
const { config } = require('../../config/index');

function withErrorStack(err, stack) {
  if (config.dev) {
    return {
      ...err, //el error trae nuevas propiedades
      stack,
    };
  }
  return err;
}

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  
  next(err);
}

function errorHandler(err, req, res, next) { // eslint-disable-line
  const {
    output: { statusCode, payload },
  } = err;
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));

}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler,
};
