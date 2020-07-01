const openlib = require('express').Router();

const book = require('./book');

const Authentication = require.main.require('./app/validation/auth/auth');
const BookValidation = require.main.require('./app/validation/openlib/book');

openlib.get('/getBook', Authentication, BookValidation, book);

module.exports = openlib;