const ApisBase = require('./ApisBase')

class Ussd extends ApisBase {
	async get() {
		return await this.api.get('/ussd/get')
	}

	async release() {
		return await this.api.get('/ussd/release')
	}

	async send(content, codeType = '', timeout = '') {
		return await this.api.post('/ussd/send', {
			content,
			codeType,
			timeout,
		})
	}

	async status() {
		return await this.api.get('ussd/status')
	}
}

module.exports = Ussd
