const ApisBase = require('./ApisBase')

class Sntp extends ApisBase {
	async sntpSwitch() {
		return this.api.get('sntp/sntpswitch')
	}

	async setSntpSwitch(sntpSwitch) {
		return this.api.post('sntp/sntpswitch', { SntpSwitch: sntpSwitch })
	}
}

module.exports = Sntp
