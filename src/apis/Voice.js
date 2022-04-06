const ApisBase = require('./ApisBase')

class Voice extends ApisBase {
	async addSipAccount(
		settings = { directorynumber: '', username: '', password: '', registerstatus: '' }
	) {
		return this.api.post('/voice/addsipaccount', { account: settings })
	}

	async codec() {
		return this.api.get('/voice/codec')
	}

	async setCodec(
		settings = [
			{
				codec: {
					codec: '',
					priority: '',
					index: '',
					silencesuppression: '',
					packetizationperiod: '',
				},
			},
		]
	) {
		return this.api.post('/voice/codec', settings)
	}

	async deleteSipAccount(index) {
		return this.api.post('/voice/deletesipaccount', { index })
	}

	async sipAccount() {
		return this.api.get('/voice/sipaccount')
	}

	async setSipAccount(
		settings = {
			index: '',
			directorynumber: '',
			username: '',
			password: '',
			registerstatus: '',
		}
	) {
		return this.api.get('/voice/sipaccount', { account: settings })
	}

	async sipAdvance() {
		return this.api.get('/voice/sipadvance')
	}

	async setSipAdvance(
		settings = {
			registerexpires: '',
			sessionexpires: '',
			minisessionexpires: '',
			pracksupport: '',
			callwaitingenable: '',
		}
	) {
		return this.api.post('/voice/sipadvance', settings)
	}

	async sipServer() {
		return this.api.get('/voice/sipserver')
	}

	async setSipServer(
		settings = {
			proxyserveraddress: '',
			proxyserverport: '',
			registerserveraddress: '',
			registerserverport: '',
			sipserverdomain: '',
			secondproxyserveraddress: '',
			secondproxyserverport: '',
			secondregisterserveraddress: '',
			secondregisterserverport: '',
			secondsipserverdomain: '',
		}
	) {
		return this.api.post('/voice/sipserver', settings)
	}

	async speedDial() {
		return this.api.get('/voice/speeddial')
	}

	async setSpeedDial(
		settings = [{ speeddial: { index: '', quicknumber: '', destination: '', description: '' } }]
	) {
		return this.api.post('/voice/speeddial', settings)
	}

	async voiceAdvance() {
		return this.api.get('/voice/voiceadvance')
	}

	async setVoiceAdvance(
		settings = {
			region: '',
			dtmfmethod: '',
			faxoption: '',
			outgoinglist: '',
			rtpportmin: '',
			inerdigitimershort: '',
			startdigittimerstd: '',
			unresponseinterval: '',
			busytonetime: '',
			howltonetime: '',
			enablesharpkey: '',
			clipenable: '',
		}
	) {
		return this.api.post('/voice/voiceadvance', { settings })
	}
}

module.exports = Voice
