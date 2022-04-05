const ApisBase = require('./ApisBase')

class Device extends ApisBase {
	async autorunVersion() {
		return this.api.get('/device/autorun-version')
	}

	async basicInformation() {
		return this.api.get('/device/basic_information')
	}

	async compressLogFile() {
		return this.api.get('/device/compresslogfile')
	}

	async control(code) {
		return this.api.post('/device/control', { Control: code })
	}

	async fastBootSwitch() {
		return this.api.get('/device/fastbootswitch')
	}

	async setFastBootSwitch(fastbootswitch) {
		return this.api.post('/device/fastbootswitch', { fastbootswitch })
	}

	async information() {
		return this.api.get('/device/information')
	}

	async setMode(code) {
		return this.api.post('/device/mode', { mode: code })
	}

	async logSettings() {
		return this.api.get('/device/logsetting')
	}

	async setLogSettings(
		settings = {
			Where: 1,
			Size: 1000,
			Modules: {
				Module: [
					{
						name: 'ats',
						desc: 'AT Server',
						mask: 0,
						file: '',
					},
				],
			},
		}
	) {
		return this.api.post('/device/logsetting', settings)
	}

	async powerSaveSwitch() {
		return this.api.get('/device/powersaveswitch')
	}

	async setPowerSaveSwitch() {
		return this.api.post('/device/powersaveswitch', { powersaveswitch: '' })
	}

	async signal() {
		return this.api.get('/device/signal')
	}

	async usbTetheringSwitch() {
		return this.api.get('/device/usb-tethering-switch')
	}

	async usbTethering() {
		return this.api.get('/device/usb-tethering')
	}

	async setUsbTethering() {
		return this.api.post('/device/usb-tethering', { tethering: '' })
	}
}

module.exports = Device
