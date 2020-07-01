const imdb = require('express').Router();

const movie = require('./movie');

const Authentication = require.main.require('./app/validation/auth/auth');
const MovieValidation = require.main.require('./app/validation/omdb/movie');

imdb.get('/getMovie', Authentication, MovieValidation, movie);

module.exports = imdb;