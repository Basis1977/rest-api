const mongoose = require('mongoose');
var request = require('request');
var querystring = require('querystring');

module.exports = (req, res, next) => {
  var openlibUrl = 'https://openlibrary.org/api/books?'
  var queryObject = {
      bibkeys: req.query.isbn.indexOf('ISBN') != -1 ? req.query.isbn : 'ISBN:'.concat(req.query.isbn),
      jscmd: 'details',
      format: 'json'
  }
  
  request({
      url:openlibUrl,
      qs: queryObject
  }, function (error, response, body) {
      if (error) {
        return next({ status: 404, message: 'Movie does not exist.' });
      }   
      res.json({
        success: true,
        message: 'Success',
        data: JSON.parse(body)
      });
  });
};