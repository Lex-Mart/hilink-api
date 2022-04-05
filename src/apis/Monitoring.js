const ApisBase = require('./ApisBase')

class Monitoring extends ApisBase {
	async checkNotifications() {
		return this.api.get('/monitoring/check-notifications')
	}

	async clearTraffic() {
		return this.api.post('/monitoring/clear-traffic', { ClearTraffic: 1 })
	}

	async convergedStatus() {
		return this.api.get('/monitoring/converged-status')
	}

	async monthStatistics() {
		return this.api.get('/monitoring/month_statistics')
	}

	async monthStatisticsWlan() {
		return this.api.get('/monitoring/month_statistics_wlan')
	}

	async startDate() {
		return this.api.get('/monitoring/start_date')
	}

	async setStartDate(
		settings = {
			StartDay: 1,
			DataLimit: '0MB',
			DataLimitAwoke: 0,
			MonthThreshold: 90,
			SetMonthData: 0,
			trafficmaxlimit: 0,
			turnoffdataenable: 0,
			turnoffdataswitch: 0,
			turnoffdataflag: 0,
		}
	) {
		return this.api.post('/monitoring/start_date', settings)
	}

	async startDateWlan() {
		return this.api.get('/monitoring/start_date_wlan')
	}

	async startDateWlan(
		settings = {
			SettingEnbale: '',
			StartDay: '',
			DataLimit: '',
			MonthThreshold: '',
		}
	) {
		return this.api.post('settings', settings)
	}

	async status() {
		return this.api.get('/monitoring/status')
	}

	async trafficStatistics() {
		return this.api.get('/monitoring/traffic-statistics')
	}
}

module.exports = Monitoring
