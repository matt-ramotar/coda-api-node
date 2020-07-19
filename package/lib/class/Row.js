export default class Row {
  constructor(api, data) {
    this.api = api;
    Object.assign(this, data);
  }
}
