const ApisBase = require('./ApisBase')

class Sdcard extends ApisBase {
	async checkFileExist() {
		return this.api.get('/sdcard/Check_file_exist')
	}

	async checkFileExist(
		params = {
			CurrentPath: '',
			FileName: '',
		}
	) {
		return this.api.post('/sdcard/Check_file_exist', params)
	}

	async createDir(
		params = {
			CurrentPath: '',
			FileName: '',
			Time: {
				Year: '',
				Month: '',
				Day: '',
				Hour: '',
				Min: '',
				Sec: '',
			},
		}
	) {
		return this.api.post('/sdcard/createdir', params)
	}

	async deleteFile(
		params = {
			CurrentPath: '',
			DeleteFileList: '',
		}
	) {
		return this.api.post('/sdcard/deletefile', params)
	}

	async dlnaSetting() {
		return this.api.get('/sdcard/dlna-setting')
	}

	async setDlnaSetting(
		settings = {
			enabled: '',
			shareallpath: '',
			sharepath: '',
		}
	) {
		return this.api.post('/sdcard/dlna-setting', settings)
	}

	async getPath() {
		return this.api.get('/sdcard/getpath')
	}

	async printerList() {
		return this.api.get('/sdcard/printerlist')
	}

	async sdCapacity() {
		return this.api.get('/sdcard/sdcapacity')
	}

	async sdCard() {
		return this.api.get('/sdcard/sdcard')
	}

	async sdCardSamba() {
		return this.api.get('/sdcard/sdcardsamba')
	}

	async setSdCardSamba() {
		return this.api.post('/sdcard/sdcardsamba', { enabled: 1 })
	}

	async sdFile(path) {
		return this.api.post('/sdcard/sdfile', { CurrentPath: path })
	}

	async sdFileState() {
		return this.api.get('/sdcard/sdfilestate')
	}

	async shareAccount() {
		return this.api.get('/sdcard/share-account')
	}

	async setShareAccount(
		settings = {
			accounts: [
				{
					account: {
						accountname: '',
						accountpwd: '',
						sharepath: '',
						accesstype: '',
						shareallpath: '',
					},
				},
			],
		}
	) {
		return this.api.post('/sdcard/share-account', settings)
	}

	async uploadFlag() {
		return this.api.get('/sdcard/uploadflag')
	}

	async setUploadFlag() {
		return this.api.post('/sdcard/uploadflag', {})
	}
}

module.exports = Sdcard
