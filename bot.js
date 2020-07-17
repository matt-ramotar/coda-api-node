import axios from 'axios';
import * as env from './env/index.js';
import * as pkg from './package/index.js';
const { Coda } = pkg;

(async () => {
  const coda = new Coda(env.apiToken.coda);
  const tag = await coda.getDoc(env.Tag.id);
  const todayView = await coda.getView(env.Tag.id, env.Today.id, env.apiToken.coda);
  const cols = await coda.listViewCols(env.Tag.id, env.Today.id, env.apiToken.coda);
  const todayRow = await coda.listViewRows(env.Tag.id, env.Today.id, env.apiToken.coda);
  const curriculum = await coda.getTable(env.Tag.id, env.Curriculum.id, env.apiToken.coda);
  const todayRowId = await todayRow.items[0].id;
  console.log(await todayRowId);
  const today = await coda.getRow(env.Tag.id, env.Curriculum.id, todayRowId, env.apiToken.coda);
  const todayId = today.values.ID;
  console.log(await today);
})();
