const ApisBase = require('./ApisBase')

class Global extends ApisBase {
	async moduleSwitch() {
		return this.api.get('/global/module-switch')
	}
}

module.exports = Global
