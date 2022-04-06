const { join } = require('path')

const Request = require('./Request')
const Cradle = require('./apis/Cradle')
const Device = require('./apis/Device')
const Dhcp = require('./apis/Dhcp')
const Diagnosis = require('./apis/Diagnosis')
const Dialup = require('./apis/Dialup')
const Global = require('./apis/Global')
const Language = require('./apis/Language')
const Monitoring = require('./apis/Monitoring')
const Net = require('./apis/Net')
const OnlineUpdate = require('./apis/OnlineUpdate')
const Ota = require('./apis/Ota')
const Pb = require('./apis/Pb')
const Pin = require('./apis/Pin')
const Redirection = require('./apis/Redirection')
const Sdcard = require('./apis/Sdcard')
const Security = require('./apis/Security')
const SMS = require('./apis/Sms')
const Sntp = require('./apis/Sntp')
const Stk = require('./apis/Stk')
const User = require('./apis/User')
const Ussd = require('./apis/Ussd')
const Voice = require('./apis/Voice')
const WebServer = require('./apis/WebServer')
const Wlan = require('./apis/Wlan')

class API {
	request = new Request()
	sms = new SMS(this)
	ussd = new Ussd(this)
	cradle = new Cradle(this)
	device = new Device(this)
	dhcp = new Dhcp(this)
	diagnosis = new Diagnosis(this)
	dialup = new Dialup(this)
	global = new Global(this)
	language = new Language(this)
	monitoring = new Monitoring(this)
	net = new Net(this)
	onlineUpdate = new OnlineUpdate(this)
	ota = new Ota(this)
	pb = new Pb(this)
	pin = new Pin(this)
	redirection = new Redirection(this)
	sdCard = new Sdcard(this)
	security = new Security(this)
	sntp = new Sntp(this)
	stk = new Stk(this)
	user = new User(this)
	voice = new Voice(this)
	webServer = new WebServer(this)
	wlan = new Wlan(this)

	TokInfo = ''
	SesInfo = ''

	constructor(ip) {
		this.baseURL = `http://${ip || '192.168.8.1'}/api`
	}

	async getTokens() {
		const response = await this.webServer.SesTokInfo()
		this.SesInfo = response.SesInfo
		this.TokInfo = response.TokInfo
	}

	async get(endpoint, params = {}) {
		const url = this.buildEndpointURL(endpoint)
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

		const url = this.buildEndpointURL(endpoint)
		const response = await this.request.post(url, data, {
			headers: {
				__RequestVerificationToken: this.TokInfo,
				Cookie: this.SesInfo,
			},
			...params,
		})

		return response
	}

	buildEndpointURL(endpoint) {
		return new URL(join(this.baseURL, endpoint)).href
	}
}

module.exports = API
