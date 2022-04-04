const BaseEndpoint = require('./BaseEndpoint')

class SMS extends BaseEndpoint {
	async getConfig() {
		return await this.api.get('/sms/config')
	}
}

module.exports = SMS
