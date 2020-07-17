import axios from 'axios';
import * as env from './env/index.js';
import * as pkg from './package/index.js';
const { Coda } = pkg;

(async () => {
  const coda = new Coda(env.apiToken.coda);
  const tag = await coda.getDoc(env.Tag.id);
  const today = await coda.getView(env.Tag.id, env.Today.id, env.apiToken.coda);
  console.log(today);
})();
