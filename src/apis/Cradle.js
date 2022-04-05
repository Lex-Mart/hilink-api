const ApisBase = require('./ApisBase')

class Cradle extends ApisBase {
	async basicInfo() {
		return this.api.get('/cradle/basic-info')
	}

	async setBasicInfo(
		params = {
			connectionmode: '',
			pppoeuser: '',
			pppoepwd: '',
			dialmode: '',
			maxidletime: '',
			pppoemtu: '',
			dynamicipmtu: '',
			ipaddress: '',
			netmask: '',
			gateway: '',
			primarydns: '',
			secondarydns: '',
			staticipmtu: '',
			dynamicsetdnsmanual: '',
			dynamicprimarydns: '',
			dynamicsecondarydns: '',
		}
	) {
		return this.api.post('/cradle/basic-info', params)
	}

	async setCurrentMac(currentmac) {
		return this.api.post('/cradle/current-mac', { currentmac })
	}

	async factoryMac() {
		return this.api.get('/cradle/factory-mac')
	}

	async macInfo() {
		return this.api.get('/cradle/mac-info')
	}

	async statusInfo() {
		return this.api.get('/cradle/status-info')
	}
}

module.exports = Cradle
