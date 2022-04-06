const ApisBase = require('./ApisBase')

class WebServer extends ApisBase {
	async token() {
		return this.api.get('/webserver/token')
	}
}

module.exports = WebServer
