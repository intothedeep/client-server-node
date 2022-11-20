import env from 'dotenv';
env.config({ path: `.env` });
env.config({ path: `.env.${process.env.NODE_ENV}` });
console.log('[][][][][] .env + .env.[mode]: ', process.env.NODE_ENV);

import { App } from './App';

const port = process.env.PORT || 4000;
const app = new App().app;

const server = app.listen(port, function () {
    console.log('[][][][][] Express listening on port', port);
    console.log('[][][][][] SERVER mode:: ', globalThis.__PROD__, process.env.NODE_ENV);
});

// index.d.ts 전역 변수 설정
const __PROD__: boolean = process.env.NODE_ENV === 'production';
globalThis.__PROD__ = __PROD__;

// import { empty } from './practice/moduleNameSpace';
// console.log('::::::::::: empty:: ', empty);
