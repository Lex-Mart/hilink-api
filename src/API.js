const SMS = require('./apis/Sms')
const Request = require('./Request')

class API {
	request = new Request()
	sms = new SMS(this)

	TokInfo = ''
	SesInfo = ''

	constructor(ip) {
		this.baseURL = `http://${ip || '192.168.8.1'}/api`
	}

	async getTokens() {
		const response = await this.request.get('http://192.168.128.1/api/webserver/SesTokInfo')
		const { SesInfo, TokInfo } = (
			await xml2js.parseStringPromise(response.data, {
				explicitArray: false,
			})
		).response

		this.SesInfo = SesInfo
		this.TokInfo = TokInfo
	}

	async get(endpoint, params = {}) {
		const url = this.baseURL + endpoint
		const response = await this.request.get(url, {
			headers: {
				__RequestVerificationToken: this.TokInfo,
				Cookie: this.SesInfo,
			},
			...params,
		})

		return response
	}

	async post(endpoint, data, params = {}) {
		await this.getTokens()

		const url = this.baseURL + endpoint
		const response = await this.request.post(url, data, {
			headers: {
				__RequestVerificationToken: this.TokInfo,
				Cookie: this.SesInfo,
			},
			...params,
		})

		return response
	}
}

module.exports = API
