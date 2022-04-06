const ApisBase = require('./ApisBase')

class Wlan extends ApisBase {
	async basicSettings() {
		return this.api.get('/wlan/basic-settings')
	}

	async setBasicSettings(
		settings = {
			WifiSsid: '',
			WifiHide: '',
			WifiRestart: '',
			WifiCountry: '',
			WifiChannel: '',
			WifiMode: '',
			Wifioffenable: '',
			WifiIsolationBetween: '',
			WifiIsolate: '',
			Wifiofftime: '',
			wifibandwidth: '',
			wifiautocountryswitch: '',
			WifiEnable: '',
		}
	) {
		return this.api.post('/wlan/basic-settings', settings)
	}

	async handoverSetting() {
		return this.api.get('/wlan/handover-setting')
	}

	async setHandoverSetting(code) {
		return this.api.post('/wlan/handover-setting', { Handover: code })
	}

	async hostList() {
		return this.api.get('/wlan/host-list')
	}

	async macFilter() {
		return this.api.get('/wlan/mac-filter')
	}

	async setMacFilter(
		settings = {
			WifiMacFilterMac0: '',
			WifiMacFilterMac1: '',
			WifiMacFilterMac2: '',
			WifiMacFilterMac3: '',
			WifiMacFilterMac4: '',
			WifiMacFilterMac5: '',
			WifiMacFilterMac6: '',
			WifiMacFilterMac7: '',
			WifiMacFilterMac8: '',
			WifiMacFilterMac9: '',
			WifiMacFilterStatus: '',
		}
	) {
		return this.api.post('/wlan/mac-filter', settings)
	}

	async multiBasicSettings() {
		return this.api.get('/wlan/multi-basic-settings')
	}

	async setMultiBasicSettings(
		settings = [
			{
				Ssid: {
					WifiSsid: '',
					WifiBroadcast: '',
					WifiWpaencryptionmodes: '',
					WifiWpapsk: '',
					WifiWepKey1: '',
					WifiWepKey2: '',
					WifiWepKey3: '',
					WifiWepKey4: '',
					WifiWepKeyIndex: '',
					WifiIsolate: '',
					wifitotalswitch: '',
					WifiEnable: '',
					WifiAuthmode: '',
					WifiBasicencryptionmodes: '',
					WifiMacFilterMac0: '',
					WifiMacFilterMac1: '',
					WifiMacFilterMac2: '',
					WifiMacFilterMac3: '',
					WifiMacFilterMac4: '',
					WifiMacFilterMac5: '',
					WifiMacFilterMac6: '',
					WifiMacFilterMac7: '',
					WifiMacFilterMac8: '',
					WifiMacFilterMac9: '',
					WifiMacFilterStatus: '',
				},
			},
		]
	) {
		return this.api.post('/wlan/multi-basic-settings', { Ssids: settings })
	}

	async multiMacFilterSettings() {
		return this.api.get('/wlan/multi-macfilter-settings')
	}

	async setMultiMacFilterSettings(
		settings = [
			{
				Ssid: {
					WifiMacFilterMac0: '',
					WifiMacFilterMac1: '',
					WifiMacFilterMac2: '',
					WifiMacFilterMac3: '',
					WifiMacFilterMac4: '',
					WifiMacFilterMac5: '',
					WifiMacFilterMac6: '',
					WifiMacFilterMac7: '',
					WifiMacFilterMac8: '',
					WifiMacFilterMac9: '',
					WifiMacFilterStatus: '',
				},
			},
		]
	) {
		return this.api.post('/wlan/multi-macfilter-settings', { Ssids: settings })
	}

	async multiSwitchSettings() {
		return this.api.get('/wlan/multi-switch-settings')
	}

	async multiSecuritySettings() {
		return this.api.get('/wlan/multi-security-settings')
	}

	async setMultiSecuritySettings(
		settings = {
			WifiCountry: '',
			WifiChannel: '',
			WifiMode: '',
			Wifioffenable: '',
			WifiIsolationBetween: '',
			WifiIsolate: '',
			Wifiofftime: '',
			wifibandwidth: '',
			wifiautocountryswitch: '',
			WifiRestart: '',
			WifiEnable: '',
		}
	) {
		return this.api.post('/wlan/multi-security-settings', settings)
	}

	async multiSecuritySettingsEx() {
		return this.api.get('/wlan/multi-security-settings-ex')
	}

	async setMultiSecuritySettingsEx(
		settings = [
			{
				ssid: {
					WifiMode: '',
					WifiIsolationBetween: '',
					WifiChannel: '',
					wifibandwidth: '',
					WifiEnable: '',
				},
			},
		]
	) {
		return this.api.post('/wlan/multi-security-settings-ex', { ssids: settings })
	}

	async oledShowPassword() {
		return this.api.get('/wlan/oled-showpassword')
	}

	async oledShowPassword(code) {
		return this.api.post('/wlan/oled-showpassword', { oledshowpassword: code })
	}

	async securitySettings() {
		return this.api.get('/wlan/security-settings')
	}

	async setSecuritySettings(
		setting = {
			WifiAuthmode: '',
			WifiWepKey1: '',
			WifiWepKey2: '',
			WifiWepKey3: '',
			WifiWepKey4: '',
			WifiWepKeyIndex: '',
			WifiWpaencryptionmodes: '',
			WifiBasicencryptionmodes: '',
			WifiWpapsk: '',
			WifiRestart: 1,
		}
	) {
		return this.api.post('/wlan/security-settings', setting)
	}

	async staSimRelation() {
		return this.api.get('/wlan/sta-sim-relation')
	}

	async stationInformation() {
		return this.api.get('/wlan/station-information')
	}

	async wifiFeatureSwitch() {
		return this.api.get('/wlan/wifi-feature-switch')
	}

	async setWifiFeatureSwitch(
		settings = {
			stawpsenabled: '',
			maxapnum: '',
			isdoublechip: '',
			opennonewps_enable: '',
			wifi24g_switch_enable: '',
		}
	) {
		return this.api.post('/wlan/wifi-feature-switch', settings)
	}

	async wifiAddProfile(
		settings = {
			WifiSsid: '',
			WifiAuthMode: '',
			WifiSecMode: '',
			WifiAuthSecret: '',
			wifiwispruser: '',
			wifiwisprpwd: '',
		}
	) {
		return this.api.post('/wlan/wifiaddprofile', settings)
	}

	async wifiDial(settings = { DialAction: '', WifiSsid: '', WifiSecMode: '' }) {
		return this.api.post('/wlan/wifidial', settings)
	}

	async wifiProfile() {
		return this.api.get('/wlan/wifiprofile')
	}

	async setWifiProfile(
		settings = [
			{
				SsidList: {
					WifiSsid: '',
					WifiSecMode: '',
					Preset: '',
					Index: '',
					Order: '',
				},
			},
		]
	) {
		return this.api.post('/wlan/wifiprofile', { SsidLists: settings })
	}

	async wifiScan() {
		return this.api.post('/wlan/wifiscan', { Wifiscan: 0 })
	}

	async wifiScanStatus() {
		return this.api.get('/wlan/wifiscan')
	}

	async wifiScanResult() {
		return this.api.get('/wlan/wifiscanresult')
	}

	async wps() {
		return this.api.get('/wlan/wps')
	}

	async setWps(settings = { WPSPin: '', ssidindex: '' }) {
		return this.api.post('/wlan/wps', settings)
	}

	async wpsPbc() {
		return this.api.get('/wlan/wps-pbc')
	}

	async setWpsPbc(
		settings = {
			WPSMode: 3,
			ssidindex: '',
		}
	) {
		return this.api.post('/wlan/wps-pbc', settings)
	}
}

module.exports = Wlan
