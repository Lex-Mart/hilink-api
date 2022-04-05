const ApisBase = require('./ApisBase')

class OnlineUpdate extends ApisBase {
	async ackNewVersion() {
		return this.api.post('/online-update/ack-newversion', { userAckNewVersion: '' })
	}

	async cancelDownloading() {
		return this.api.post('/online-update/cancel-downloading', {})
	}

	async checkNewVersion() {
		return this.api.post('/online-update/check-new-version', {})
	}

	async status() {
		return this.api.get('/online-update/status')
	}

	async upgradeMessagebox() {
		return this.api.get('/online-update/upgrade-messagebox')
	}

	async setUpgradeMessagebox() {
		return this.api.post('/online-update/upgrade-messagebox', { messagebox: '' })
	}

	async urlList() {
		return this.api.get('/online-update/url-list')
	}
}

module.exports = OnlineUpdate
