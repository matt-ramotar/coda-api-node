import Row from './Row.js';
import Column from './Column.js';

export default class View {
  constructor(api, data) {
    this.api = api;
    Object.assign(this, data);
  }

  async listColumns(params) {
    const { data } = await this.api.get(`/docs/${this.docId}/views/${this.id}/columns`, params);
    return data.items.map(
      column => new Column(this.api, { ...column, docId: this.docId, viewId: this.id }),
    );
  }

  async listRows(params) {
    const { data } = await this.api.get(`/docs/${this.docId}/views/${this.id}/rows`, params);
    return data.items.map(row => new Row(this.api, { ...row, docId: this.docId, viewId: this.id }));
  }
}
