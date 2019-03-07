var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var configSchema = new Schema({
	apiKey: { type: String, required: true },
});

module.exports = mongoose.model('Config', configSchema);
