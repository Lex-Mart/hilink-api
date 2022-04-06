const HilinkAPI = require('./src')

const start = async () => {
	const api = new HilinkAPI('192.168.128.1')
	const res = await api.sms.smsList()
	console.log(res.Messages)
	console.log(api)
}

start()
