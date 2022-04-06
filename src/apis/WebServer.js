const ApisBase = require('./ApisBase')

class WebServer extends ApisBase {
	async token() {
		return this.api.get('/webserver/token')
	}

	async SesTokInfo() {
		return this.api.get('/webserver/SesTokInfo')
	}
}

module.exports = WebServer
