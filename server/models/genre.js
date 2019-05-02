var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreSchema = new Schema({
    name: { type: String, required: true },
});

module.exports = mongoose.model('Genre', genreSchema);
