const ApisBase = require('./ApisBase')

class User extends ApisBase {
	async logout() {
		return this.api.post('/user/logout', { Logout: 1 })
	}

	async password(
		params = {
			Username: '',
			CurrentPassword: '',
			NewPassword: '',
		}
	) {
		return this.api.post('/user/password', params)
	}

	async remind() {
		return this.api.get('/user/remind')
	}

	async session() {
		return this.api.post('/user/session', { keep: 1 })
	}

	async stateLogin() {
		return this.api.get('/state-login')
	}
}

module.exports = User
