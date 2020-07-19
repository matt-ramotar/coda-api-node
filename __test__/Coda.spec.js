import Coda from '../index.js';

/**
 * @name Coda class
 * @desc Instantiates client for using Coda REST API.
 */

const token = process.env.API_TOKEN;
const docId = process.env.DOC_ID;
const tableId = process.env.TABLE_ID;
const viewId = process.env.VIEW_ID;

let coda;

beforeAll(() => {
  coda = new Coda(token);
  jest.mock('../package/Coda.js');
});

describe('whoAmI', () => {
  test('returns name of current user', async () => {
    const name = (await coda.whoAmI()).name;
    expect(name).toBe('Matthew Ramotar');
  });
  test('returns loginId of current user', async () => {
    const loginId = (await coda.whoAmI()).loginId;
    expect(loginId).toBe('matt.ramotar@jhu.edu');
  });
});
