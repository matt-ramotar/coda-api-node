import API from './api/index.js';
import { Column, Doc, Row, Table, View } from './class/index.js';

export default class Coda {
  constructor(token) {
    this.api = new API(token);
  }

  async whoAmI() {
    const { data } = await this.api.get(`/whoami`);
    return data;
  }

  async resolveBrowserLink(link) {
    const { data } = await this.api.get(`/resolveBrowserLink`, { params: { url: link } });
    return data;
  }

  async getDoc(docId) {
    const { data } = await this.api.get(`/docs/${docId}`);
    return new Doc(this.api, data);
  }

  async getTable(docId, tableId) {
    const { data } = await this.api.get(`/docs/${docId}/tables/${tableId}`);
    return new Table(this.api, { ...data, docId: docId });
  }

  async getRow(docId, tableId, rowId, params) {
    const { data } = await this.api.get(`/docs/${docId}/tables/${tableId}/rows/${rowId}`, params);
    return new Row(this.api, { ...data, docId, tableId });
  }

  async getColumn(docId, tableId, columnId) {
    const { data } = await this.api.get(`/docs/${docId}/tables/${tableId}/columns/${columnId}`);
    return new Column(this.api, { ...data, docId, tableId });
  }

  async getView(docId, viewId) {
    const { data } = await this.api.get(`/docs/${docId}/views/${viewId}`);
    return new View(this.api, { ...data, viewId });
  }

  async listViewColumns(docId, viewId, params) {
    const { data } = await this.api.get(`/docs/${docId}/views/${viewId}/columns`, params);
    return data.items.map(column => new Column({ ...column, docId, viewId }));
  }

  async listTableColumns(docId, tableId, params) {
    const { data } = await this.api.get(`/docs/${docId}/tables/${tableId}/columns`, params);
    return data.items.map(column => new Column({ ...column, docId, tableId }));
  }

  async listViewRows(docId, viewId, params) {
    const { data } = await this.api.get(`/docs/${docId}/views/${viewId}/rows`, params);
    return data.items.map(row => new Row(this.api, { ...row, docId, viewId }));
  }

  async listTableRows(docId, tableId, params) {
    const { data } = await this.api.get(`/docs/${docId}/tables/${tableId}/rows`, params);
    return data.items.map(row => new Row(this.api, { ...row, docId, tableId }));
  }
}
