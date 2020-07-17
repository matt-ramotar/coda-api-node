import * as method from '../function/index.js';

export default class Coda {
  constructor(token) {
    this.token = token;
  }

  async getDoc(docId) {
    return await method.getDoc(docId, this.token);
  }

  async getView(docId, viewId) {
    return await method.getView(docId, viewId, this.token);
  }

  async listCols(docId, viewId) {
    return await method.listCols(docId, viewId, this.token);
  }
}
