const ApisBase = require('./ApisBase')

class Stk extends ApisBase {
	async stkGetMain(
		params = {
			CmdType: '',
			CmdIndex: '',
			Result: 15,
			DataType: '',
			Data: '',
			MenuLevel: '',
			PageIndex: '',
			ReadCount: '',
			IsJumpPage: '',
		}
	) {
		return this.api.post('/stk/stk-get-main', params)
	}

	async stkGetSub(
		params = {
			CmdType: '',
			CmdIndex: '',
			Result: 15,
			DataType: '',
			Data: '',
			MenuLevel: '',
			PageIndex: '',
			ReadCount: '',
			IsJumpPage: '',
		}
	) {
		return this.api.post('/stk/stk-get-sub', params)
	}

	async stkQuery() {
		return this.api.get('/stk/stk-query')
	}
}

module.exports = Stk
