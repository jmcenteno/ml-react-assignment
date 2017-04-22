import request from './request';

import { API_URL } from '../config/constants';

class BaseService {

	constructor () {

		this.request = request;
		this.baseUrl = API_URL;

	}

}

export default BaseService;
