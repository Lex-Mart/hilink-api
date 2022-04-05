const ApisBase = require('./ApisBase')

class SMS extends ApisBase {
	async backupSim(settings = { IsMove: 0, Date: '' }) {
		return this.api.post('/sms/backup-sim', settings)
	}

	async cancelSend() {
		return this.api.post('/sms/cancel-send', 1)
	}

	async config() {
		return await this.api.get('/sms/config')
	}

	async deleteSms(index) {
		return this.api.post('/sms/delete-sms', { Index: index })
	}

	async cbsChannelList() {
		return this.api.get('/sms/get-cbschannellist')
	}

	async getCbsNewsList() {
		return this.api.get('/sms/get-cbsnewslist')
	}

	async setOperateCbsChannel(settings = { type: '', channel: '' }) {
		return this.api.post('/sms/operate-cbschannel', settings)
	}

	async saveSms(
		settings = {
			Index: -1,
			Phones: [{ Phone: '' }],
			Sca: '',
			Content: '',
			Length: -1,
			Reserved: 1,
			Date: -1,
		}
	) {
		return this.api.post('/sms/save-sms', settings)
	}

	async sendSend(
		settings = {
			Index: -1,
			Phones: [{ Phone: '' }],
			Sca: '',
			Content: '',
			Length: -1,
			Reserved: 1,
			Date: -1,
			SendType: '',
		}
	) {
		return this.api.post('/sms/send-sms', settings)
	}

	async sendStatus() {
		return this.api.get('/sms/send-status')
	}

	async setRead(index) {
		return this.api.post('/sms/set-read', { Index: index })
	}

	async smsCount() {
		return this.api.get('/sms/sms-count')
	}

	async smsFeatureSwitch() {
		return this.api.get('/sms/sms-feature-switch')
	}

	async smsList(
		settings = {
			PageIndex: 1,
			ReadCount: 20,
			BoxType: 1,
			SortType: 0,
			Ascending: 0,
			UnreadPreferred: 0,
		}
	) {
		return this.api.post('/sms/sms-list', settings)
	}

	async splitInfoSms() {
		return this.api.get('/sms/splitinfo-sms')
	}
}

module.exports = SMS
