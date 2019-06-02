var mongoose = require('mongoose');

const Categorie = require('./categorie');
const Countrie = require('./countrie');
const Genre = require('./genre');
const Creator = require('./creator');

var Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: { type: String, required: true },
    tagline: { type: String, required: false },
    categorieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Categorie,
        default: null,
    },
    genreId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Genre,
        default: null,
    }],
    countrieId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Countrie,
        default: null,
    }],
    creatorId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Creator,
        default: null,
    }],
}, {
    timestamps: true,
});


module.exports = mongoose.model('Movie', movieSchema);

// Mengetest insert data
// var Movie = mongoose.model('Movie', movieSchema);

// var data = new Movie({
//     title: 'test',
//     tagline: 'asd',
//     categorieId: '5c8cfe1ed6cc65760bdde688',
// });
// data.save(function (err) {
//   if (err) return handleError(err);
// });

