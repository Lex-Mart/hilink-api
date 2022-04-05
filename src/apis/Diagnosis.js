const ApisBase = require('./ApisBase')

class Diagnosis extends ApisBase {
	async ping(
		params = {
			target: '',
			packetsize: 0,
			timeout: 1,
			fragment: '',
		}
	) {
		return this.api.post('/diagnosis/ping', params)
	}

	async traceroute(
		params = {
			target: '',
			maxhops: 1,
			timeout: 2,
		}
	) {
		return this.api.post('/diagnosis/traceroute', params)
	}

	async tracerouteResult() {
		return this.api.get('/diagnosis/tracerouteresult')
	}
}

module.exports = Diagnosis
