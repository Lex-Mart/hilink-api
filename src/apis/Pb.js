const ApisBase = require('./ApisBase')

class Pb extends ApisBase {
	async groupDelete(groupId) {
		return this.api.post('/pb/group-delete', { GroupID: groupId })
	}

	async groupList(
		settings = {
			PageIndex: '',
			ReadCount: '',
			SortType: '',
			Ascending: '',
		}
	) {
		return this.api.post('/pb/group-list', settings)
	}

	async groupNew(groupName) {
		return this.api.post('/pb/group-new', { GroupName: groupName })
	}

	async groupUpdate(
		settings = {
			GroupID: '',
			GroupName: '',
		}
	) {
		return this.api.post('/pb/group-update', settings)
	}

	async pbCopySIM(groupId) {
		return this.api.post('/pb/pb-copySIM', { GroupID: 'GroupID' })
	}

	async pbCount() {
		return this.api.get('/pb/pb-count')
	}

	async pbDelete(index) {
		return this.api.post('/pb/pb-delete', { Index: index })
	}

	async pbExport(
		settings = {
			Indexs: 'all',
			SaveType: 0,
			FileType: 'csv',
		}
	) {
		return this.api.post('/pb/pb-export', settings)
	}

	async pbImport(
		settings = {
			GroupID: 0,
			SaveType: 0,
			FileType: 'csv',
		}
	) {
		return this.apipost('/pb/pb-import', settings)
	}

	async pbImportField() {
		return this.api.get('/pb/pb-import-field')
	}

	async pbImportField(
		settings = [
			{ Field: { Name: 'FormattedName', Value: '' } },
			{ Field: { Name: 'MobilePhone', Value: '' } },
			{ Field: { Name: 'HomePhone', Value: '' } },
			{ Field: { Name: 'WorkPhone', Value: '' } },
			{ Field: { Name: 'WorkEmail', Value: '' } },
		]
	) {
		return this.api.post('/pb/pb-import-field', settings)
	}

	async pbImportLength(
		settings = [
			{ Field: { Name: 'FormattedName', Value: '' } },
			{ Field: { Name: 'MobilePhone', Value: '' } },
			{ Field: { Name: 'HomePhone', Value: '' } },
			{ Field: { Name: 'WorkPhone', Value: '' } },
			{ Field: { Name: 'WorkEmail', Value: '' } },
		]
	) {
		return this.api.post('/pb/pb-import-length', settings)
	}

	async pbImportMatch(
		settings = [
			{ Field: { Name: 'FormattedName', Value: '' } },
			{ Field: { Name: 'MobilePhone', Value: '' } },
			{ Field: { Name: 'HomePhone', Value: '' } },
			{ Field: { Name: 'WorkPhone', Value: '' } },
			{ Field: { Name: 'WorkEmail', Value: '' } },
		]
	) {
		return this.api.post('/pb/pb-import-match', settings)
	}

	async pbList(
		settings = {
			GroupID: '',
			PageIndex: '',
			ReadCount: '',
			SaveType: 0,
			SortType: 0,
			Ascending: 0,
			KeyWord: '',
		}
	) {
		return this.api.post('/pb/pb-list', settings)
	}

	async pbNew(
		settings = {
			GroupID: '',
			SaveType: '',
		}
	) {
		return this.api.post('/pb/pb-new', settings)
	}

	async pbMatch(phone) {
		return this.api.post('/pb/pb-match', { Phone: phone })
	}
}

module.exports = Pb
