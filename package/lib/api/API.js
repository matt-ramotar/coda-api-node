import axios from 'axios';

export default class API {
  constructor(token) {
    this.instance = axios.create({
      baseURL: 'https://coda.io/apis/v1beta1',
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async get(endpoint, params) {
    return await this.instance.get(endpoint, params);
  }
}
