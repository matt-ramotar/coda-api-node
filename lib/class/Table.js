import Row from './Row.js';
import Column from './Column.js';

export default class Table {
  constructor(api, data) {
    this.api = api;
    Object.assign(this, data);
  }

  async getColumn(columnId) {
    const { data } = await this.api.get(
      `/docs/${this.docId}/tables/${this.id}/columns/${columnId}`,
    );
    return new Column(this.api, { ...data, docId: this.docId, tableId: this.id });
  }

  async getRow(rowId, params) {
    const { data } = await this.api.get(
      `/docs/${this.docId}/tables/${this.id}/rows/${rowId}`,
      params,
    );
    return new Row(this.api, { ...data, docId: this.docId, tableId: this.id });
  }

  async listColumns(params) {
    const { data } = await this.api.get(`/docs/${this.docId}/tables/${this.id}/columns`, params);
    return data.items.map(
      column => new Column(this.api, { ...column, docId: this.docId, tableId: this.id }),
    );
  }

  async listRows(params) {
    const { data } = await this.api.get(`/docs/${this.docId}/tables/${this.id}/rows`, params);
    return data.items.map(
      row => new Row(this.api, { ...row, docId: this.docId, tableId: this.id }),
    );
  }
}
