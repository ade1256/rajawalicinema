var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var creatorSchema = new Schema({
    name: { type: String, required: true },
});

module.exports = mongoose.model('Creator', creatorSchema);
