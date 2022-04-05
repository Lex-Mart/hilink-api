const API = require('./src/API')

const start = async () => {
	const api = new API('192.168.128.1')
	await api.getTokens()
	const res = await api.sms.splitInfoSms()
	console.log(res)
}

start()
