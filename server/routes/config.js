const mongooseCrudify = require('mongoose-crudify');
var methods = require("../methods")
const Config = require('../models/config');

module.exports = function (server, router) {

	server.use(
		'/api/config',
		mongooseCrudify({
			Model: Config,
			beforeActions: [
				{
					middlewares: [methods.ensureToken],
					// except:['list']
				}
			  ],
		})
	);

};