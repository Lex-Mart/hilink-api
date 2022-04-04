const API = require('./src/API')

const start = async () => {
	const api = new API('192.168.128.1')
	const res = await api.sms.getConfig()
	console.log(res)
}

start()
