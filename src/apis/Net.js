const ApisBase = require('./ApisBase')

class Net extends ApisBase {
	async currentPlmn() {
		return this.api.get('/net/current-plmn')
	}

	async netMode() {
		return this.api.get('/net/net-mode')
	}

	async setNetMode(
		settings = {
			NetworkMode: '00',
			NetworkBand: '3FFFFFFF',
			LTEBand: '800C5',
		}
	) {
		return this.api.post('/net/net-mode', settings)
	}

	async netModeList() {
		return this.api.get('/net/net-mode-list')
	}

	async network() {
		return this.api.get('/net/network')
	}

	async setNetwork(
		settings = {
			NetworkBand: '3FFFFFFF',
			LTEBand: '800C5',
		}
	) {
		return this.api.post('/net/network', settings)
	}

	async plmnList() {
		return this.api.get('/net/plmn-list')
	}

	async register() {
		return this.api.get('/net/register')
	}

	async setRegister(
		settings = {
			Mode: 0,
			Plmn: '',
			Rat: 7,
		}
	) {
		return this.api.post('/net/register', settings)
	}

	async signalParametrs() {
		return this.api.get('/net/signal-para')
	}
}

module.exports = Net
