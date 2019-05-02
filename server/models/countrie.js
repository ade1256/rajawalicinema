var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var countrieSchema = new Schema({
    name: { type: String, required: true },
});

module.exports = mongoose.model('Countrie', countrieSchema);
