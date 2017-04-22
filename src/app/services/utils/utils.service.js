import request from '../request';

import { API_URL } from '../../config/constants';

class UtilitiesService {

	getNextPage (prevResponse, data, resolve) {

		data = data.map((item) => {
			return this.addRecordId(item);
		});

		if (!prevResponse.next) {

			return resolve(data);

		} else {

			request.get(prevResponse.next)
				.then((response) => {

					const results = response.body.results.map((item) => {
						return this.addRecordId(item);
					});

					data = [].concat(data, results);

					this.getNextPage(response.body, data, resolve);

				})
				.catch(() => {
					resolve(data);
				});

		}

	}

	addRecordId (obj) {

		const arr = obj.url.replace(`${API_URL}/`, '').split('/');

		obj.id = Number.parseInt(arr[arr.length - 2], 10);

		return obj;

	}

	filterDataSet (rows = [], filter = '', keys = []) {

		if (!rows) {
			return [];
		}

		if (!rows.length) {
			return rows;
		}

		let regEx = new RegExp(escape(filter.toString().toLowerCase()));
		keys = keys || Object.keys(rows[0]);

		let filteredData = rows.filter((item) => {
			for (let i = 0; i < keys.length; i++) {
				if (item[keys[i]] == null || item[keys[i]] == undefined) continue;
				if (regEx.test(escape(item[keys[i]].toString().toLowerCase()))) {
					return true;
				}
			}
			return false;
		});

		return filteredData;

	}
	
}

export default new UtilitiesService();
