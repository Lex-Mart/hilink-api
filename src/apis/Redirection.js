const ApisBase = require('./ApisBase')

class Redirection extends ApisBase {
	async homepage() {
		return this.api.get('/redirection/homepage')
	}
}

module.exports = Redirection
