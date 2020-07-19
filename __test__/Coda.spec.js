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

describe('whoAmI()', () => {
  test('returns name of current user', async () => {
    const name = (await coda.whoAmI()).name;
    expect(name).toBe('Matthew Ramotar');
  });
  test('returns name of token', async () => {
    const tokenName = (await coda.whoAmI()).tokenName;
    expect(tokenName).toBe('coda-api-node');
  });
});

describe('resolveBrowserLink()', () => {
  let response;
  beforeEach(async () => {
    response = await coda.resolveBrowserLink(
      'https://coda.io/d/tag_dUaRHGm0rXX/LO_suQ8R#View-of-objectives-data_tu10k/r259',
    );
  });
  test('returns metadata using API link', () => {
    const type = response.type;
    expect(type).toBe('apiLink');
  });
  test('returns id of target Coda object', () => {
    const resourceId = response.resource.id;
    expect(resourceId).toBe('i-YgGE8Vfg1D');
  });
  test('returns type of target Coda object', () => {
    const resourceType = response.resource.type;
    expect(resourceType).toBe('row');
  });
});
