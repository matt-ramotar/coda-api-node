import * as method from '../function/index.js';

export default class Coda {
  constructor(token) {
    this.token = token;
  }

  async getDoc(docId) {
    return await method.getDoc(docId, this.token);
  }
}
