import * as env from './env/index.js';
import * as pkg from './package/index.js';
const { Coda, getDoc } = pkg;

const coda = new Coda(env.API_TOKEN);
console.log(Coda, getDoc);
console.log(Coda.toString());
