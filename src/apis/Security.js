const ApisBase = require('./ApisBase')

class Security extends ApisBase {
	async bridgeMode() {
		return this.api.get('/security/bridgemode')
	}

	async setBridgeMode() {
		return this.api.post('/security/bridgemode', { bridgemode: '' })
	}

	async dmz() {
		return this.api.get('/security/dmz')
	}

	async setDmz(settings = { DmzStatus: 0, DmzIPAddress: '' }) {
		return this.api.post('/security/dmz', settings)
	}

	async firewallSwitch() {
		return this.api.get('/security/firewall-switch')
	}

	async setFirewallSwitch(
		settings = {
			FirewallMainSwitch: '',
			FirewallIPFilterSwitch: '',
			FirewallWanPortPingSwitch: '',
			firewallurlfilterswitch: '',
			firewallmacfilterswitch: '',
		}
	) {
		return this.api.post('/security/firewall-switch', settings)
	}

	async lanIpFilter() {
		return this.api.get('/security/lan-ip-filter')
	}

	async setLanIpFilter(
		filters = [
			{
				IPFilter: {
					LanIPFilterProtocol: '',
					LanIPFilterStatus: '',
					LanIPFilterLanStartAddress: '',
					LanIPFilterLanEndAddress: '',
					LanIPFilterLanStartPort: '',
					LanIPFilterLanEndPort: '',
					LanIPFilterWanStartAddress: '',
					LanIPFilterWanEndAddress: '',
					LanIPFilterWanStartPort: '',
					LanIPFilterWanEndPort: '',
					LanIPFilterSrcStartIPMask: '',
					LanIPFilterDestStartIPMask: '',
					LanIPFilterPolicy: 0,
				},
			},
		]
	) {
		return this.api.post('/security/lan-ip-filter', { IPFilters: [...filters] })
	}

	async macFilter() {
		return this.api.get('/security/mac-filter')
	}

	async macFilter(macFilters = [{ macfilter: { value: '', status: '' } }]) {
		return this.api.post('/security/mac-filter', { policy: 1, macfilters: [...macFilters] })
	}

	async nat() {
		return this.api.get('/security/nat')
	}

	async setNat(type) {
		return this.api.get('/security/nat', { NATType: type })
	}

	async sip() {
		return this.api.get('/security/sip')
	}

	async setSip(settings = { SipStatus: '', SipPort: '' }) {
		return this.api.post('/security/sip', settings)
	}

	async specialApplications() {
		return this.api.get('/security/special-applications')
	}

	async setSpecialApplications(
		lanPorts = [
			{
				LanPort: {
					SpecialApplicationTriggerName: '',
					SpecialApplicationTriggerStatus: '',
					SpecialApplicationTriggerPort: '',
					SpecialApplicationTriggerProtocol: '',
					SpecialApplicationOpenProtocol: '',
					SpecialApplicationStartOpenPort0: '',
					SpecialApplicationEndOpenPort0: '',
					SpecialApplicationStartOpenPort1: '',
					SpecialApplicationEndOpenPort1: '',
					SpecialApplicationStartOpenPort2: '',
					SpecialApplicationEndOpenPort2: '',
					SpecialApplicationStartOpenPort3: '',
					SpecialApplicationEndOpenPort3: '',
					SpecialApplicationStartOpenPort4: '',
					SpecialApplicationEndOpenPort4: '',
				},
			},
		]
	) {
		return this.api.post('/security/special-applications', { LanPorts: { ...lanPorts } })
	}

	async upnp() {
		return this.api.get('/security/upnp')
	}

	async setUpnp(status) {
		return this.api.post('/security/upnp', { UpnpStatus: status })
	}

	async urlFilter() {
		return this.api.get('/security/url-filter')
	}

	async setUrlFilter(urlFilters = [{ urlfilter: { value: '', status: '' } }]) {
		return this.api.post('/security/url-filter', { urlfilters: [...urlFilters] })
	}

	async virtualServers() {
		return this.api.get('/security/virtual-servers')
	}

	async setVirtualServers(
		servers = [
			{
				Server: {
					VirtualServerIPName: '',
					VirtualServerWanPort: '',
					VirtualServerIPAddress: '',
					VirtualServerRemoteIP: '',
					VirtualServerWanEndPort: '',
					VirtualServerLanPort: '',
					VirtualServerProtocol: '',
					VirtualServerStatus: '',
				},
			},
		]
	) {
		return this.api.post('/security/virtual-servers', { Servers: [...servers] })
	}
}

module.exports = Security
