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

  async listViewCols(docId, viewId) {
    return await method.listViewCols(docId, viewId, this.token);
  }

  async listViewRows(docId, viewId) {
    return await method.listViewRows(docId, viewId, this.token);
  }

  async getTable(docId, tableId) {
    return await method.getTable(docId, tableId, this.token);
  }
  async getRow(docId, tableId, rowId) {
    return await method.getRow(docId, tableId, rowId, this.token);
  }
}
