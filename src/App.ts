import * as core from 'express-serve-static-core';
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

import { router } from './controllers';

export const port: number = process.env.PORT || 4000;

export class App {
    constructor() {
        this._app = express();

        // 미들웨어 셋팅
        this.setMiddleWare();

        // 정적 디렉토리 추가
        this.setStatic();

        // 라우팅
        this.getRouting();

        // 404 페이지를 찾을수가 없음
        this.status404();
    }

    private _app: core.Express;
    get app(): core.Express {
        return this._app;
    }

    setMiddleWare() {
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
    }

    setStatic() {
        this.app.use('/uploads', express.static('uploads'));
        this.app.use('/static', express.static('static'));
    }

    getRouting() {
        this.app.use(router);
    }

    status404() {
        this.app.use((req, res, _) => {
            res.status(404).render('common/404.html');
        });
    }
}
