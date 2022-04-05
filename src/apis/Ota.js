const ApisBase = require('./ApisBase')

class Ota extends ApisBase {
	async activate(
		settings = {
			AutoActivate: '',
			Number: '',
			Mdn: '',
			Min: '',
			HomeSid: '',
		}
	) {
		return this.api.post('/ota/activate', settings)
	}

	async otaMsg() {
		return this.api.get('/ota/otamsg')
	}

	async otksl() {
		return this.api.get('/ota/otksl')
	}

	async setOtksl(settings = { Type: '', Password: '' }) {
		return this.api.post('/ota/otksl', settings)
	}
}

module.exports = Ota
