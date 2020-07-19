import Table from './Table.js';
import View from './View.js';

export default class Doc {
  constructor(api, data) {
    this.api = api;
    Object.assign(this, data);
  }

  async getTable(tableId) {
    const { data } = await this.api.get(`/docs/${this.id}/tables/${tableId}`);
    return new Table(this.api, { ...data, docId: this.id });
  }

  async getView(viewId) {
    const { data } = await this.api.get(`/docs/${this.id}/views/${viewId}`);
    return new View(this.api, { ...data, docId: this.id });
  }
}
