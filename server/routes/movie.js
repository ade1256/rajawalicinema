const mongooseCrudify = require('mongoose-crudify');
var methods = require("../methods");
const Movie = require('../models/movie');
const mongoose = require('mongoose');

module.exports = function (server, router) {

	server.use(
		'/api/movie',
		mongooseCrudify({
			Model: Movie,
			beforeActions: [
				{
					middlewares: [methods.ensureToken]
				}
			  ],
		})
	);
       server.get('/api/movie-list', methods.ensureToken, function(req, res, next) {
        Movie.find()
        .populate('categorieId')
        .populate('genreId')
        .populate('countrieId')
        .populate('creatorId')
          .exec(function (err, movies) {
            if (err) return next(err);
            res.json(movies);
          });
			});
			
			server.get('/api/movie-list/:urlSlug', methods.ensureToken, function(req, res, next) {
        Movie.findOne({urlSlug: req.params.urlSlug})
        .populate('categorieId')
        .populate('genreId')
        .populate('countrieId')
        .populate('creatorId')
          .exec(function (err, movies) {
            if (err) return next(err);
						res.json(movies);
          });
			});
};