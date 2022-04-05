const ApisBase = require('./ApisBase')

class Language extends ApisBase {
	async currentLanguage() {
		return this.api.get('/language/current-language')
	}

	async setCurrentLanguage(language) {
		return this.api.post('/language/current-language', { CurrentLanguage: language })
	}
}

module.exports = Language
