const axios = require('axios')
const xml2js = require('xml2js')

class Request {
	errorCodes = {
		100002: 'No support in the firmware or wrong API address',
		100003: 'No permission',
		100004: 'System busy',
		100005: 'There is no information about the given error',
		100006: 'Incorrect parameter',
		100009: 'Write error',
		103002: 'There is no information about the given error',
		103015: 'There is no information about the given error',
		108001: 'Invalid username',
		108002: 'Incorrect user password',
		108003: 'User currently logged in',
		108006: 'Invalid username or password',
		108007: 'Invalid username or password, limit of attempts reached',
		110024: 'battery below 50% (with software update)',
		111019: 'No network response',
		111020: 'Network timeout',
		111022: 'The network does not support',
		113018: 'System busy (for SMS operations)',
		114001: 'The file already exists',
		114002: 'The file already exists',
		114003: 'SD card is currently in use',
		114004: 'The shared path does not exist',
		114005: 'Access path too long',
		114006: 'No permission to file / directory',
		115001: 'There is no information about the given error',
		117001: 'Incorrect password (with WiFi connection)',
		117004: 'Incorrect WISPr password (with WiFi connection)',
		120001: 'Voice call busy',
		125001: 'Invalid token',
		125003: 'Invalid token',
	}

	async checkError(response) {
		const obj = await xml2js.parseStringPromise(response)

		if (obj.error) {
			const errorCode = obj.error.code[0]
			const codeDescription = this.errorCodes[errorCode] || ''
			const message = obj.error.message[0] || ''

			throw new Error(
				`[${errorCode}]${codeDescription && ' ' + codeDescription}${
					message && '\nMessage: ' + message
				}`
			)
		}
	}

	async post(url, data, params = {}) {
		try {
			const res = await axios.post(url, data, params)
			await this.checkError(res.data)
			const parseResponse = await xml2js.parseStringPromise(res.data)
			return parseResponse
		} catch (error) {
			throw error
		}
	}

	async get(url, params) {
		try {
			const res = await axios.get(url, params)
			await this.checkError(res.data)
			const parseResponse = await xml2js.parseStringPromise(res.data)
			return parseResponse
		} catch (error) {
			throw error
		}
	}
}

module.exports = Request
