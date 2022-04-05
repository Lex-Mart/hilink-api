const ApisBase = require('./ApisBase')

class Host extends ApisBase {
	async setInfo(
		settings = {
			Time: '',
			Timezone: '',
			Platform: '',
			PlatformVer: '',
			Navigator: '',
			NavigatorVer: '',
		}
	) {
		return this.api.post('/host/info', settings)
	}
}

module.exports = Host
