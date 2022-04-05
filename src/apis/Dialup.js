const ApisBase = require('./ApisBase')

class Dialup extends ApisBase {
	async autoApn() {
		return this.api.get('/dialup/auto-apn')
	}

	async setAutoApn() {
		return this.api.post('/dialup/auto-apn', { AutoAPN: '' })
	}

	async connection() {
		return this.api.get('/dialup/connection')
	}

	async setConnection(
		settings = {
			RoamAutoConnectEnable: 0,
			AutoReconnect: 1,
			RoamAutoReconnctEnable: 1,
			ReconnectInterval: 3,
			MaxIdelTime: 0,
			ConnectMode: 0,
		}
	) {
		return this.api.post('/dialup/connection', settings)
	}

	async dial(code) {
		return this.api.post('/dialup/dial', { Action: code })
	}

	async dialupFeatureSwitch() {
		return this.api.post('/dialup/dialup-feature-switch')
	}

	async mobileDataswitch() {
		return this.api.get('/dialup/mobile-dataswitch')
	}

	async setMobileDataswitch(code) {
		return this.api.post('/dialup/mobile-dataswitch', { dataswitch: code })
	}

	async deleteProfiles(
		params = {
			Delete: '',
			SetDefault: '',
			Modify: 0,
		}
	) {
		return this.api.post('/dialup/profiles', params)
	}

	async profiles() {
		return this.api.get('/dialup/profiles')
	}

	async createOrUpdateProfile(
		params = {
			Delete: '',
			SetDefault: '',
			Modify: 0,
			CurrentProfile: 1,
			Profile: {
				Index: '',
				IsValid: 1,
				Name: '',
				ApnIsStatic: '',
				ApnName: '',
				DialupNum: '',
				Username: '',
				Password: '',
				AuthMode: 2,
				IpIsStatic: '',
				IpAddress: '',
				Ipv6Address: '',
				DnsIsStatic: '',
				PrimaryDns: '',
				SecondaryDns: '',
				PrimaryIpv6Dns: '',
				SecondaryIpv6Dns: '',
				ReadOnly: 0,
				iptype: '',
			},
		}
	) {
		return this.api.post('/dialup/profiles', params)
	}
}

module.exports = Dialup
