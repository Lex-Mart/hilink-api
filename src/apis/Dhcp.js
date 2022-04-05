const ApisBase = require('./ApisBase')

class Dhcp extends ApisBase {
	async settings() {
		return this.api.get('/dhcp/settings')
	}

	async setSettings(
		settings = {
			DhcpIPAddress: '',
			DhcpLanNetmask: '',
			DhcpStatus: '',
			DhcpStartIPAddress: '',
			DhcpEndIPAddress: '',
			DhcpLeaseTime: '',
			PrimaryDns: '',
			SecondaryDns: '',
		}
	) {
		return this.api.post('/dhcp/settings', settings)
	}
}

module.exports = Dhcp
