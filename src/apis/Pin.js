const ApisBase = require('./ApisBase')

class Pin extends ApisBase {
	async operate(
		settings = {
			OperateType: 0,
			CurrentPin: 0,
			NewPin: 0,
			PukCode: 0,
		}
	) {
		return this.api.post('/pin/operate', settings)
	}

	async savePin() {
		return this.api.get('/pin/save-pin')
	}

	async setSavePin(
		settings = {
			SimSavepinStatus: '',
			SimSavepinScid: '',
			simsavepinenable: '',
		}
	) {
		return this.api.post('/pin/save-pin', settings)
	}

	async simlock() {
		return this.api.get('/pin/simlock')
	}

	async status() {
		return this.api.get('/pin/status')
	}

	async verifySimlock(code) {
		return this.api.post('/pin/verify-simlock', { SimLockCode: code })
	}
}

module.exports = Pin
