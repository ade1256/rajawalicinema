var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var categorieSchema = new Schema({
    name: { type: String, required: true },
});

module.exports = mongoose.model('Categorie', categorieSchema);
