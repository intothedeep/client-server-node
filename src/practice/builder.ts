import env from 'dotenv';
env.config({ path: `.env` });
env.config({ path: `.env.${process.env.NODE_ENV}` });
console.log('env initialized: common + mode', process.env.NODE_ENV);

import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

import * as core from 'express-serve-static-core';
import { router } from '../controllers';

export const port: number = process.env.PORT || 4000;

export class App {
    ////
    static AppBuilder = class {
        private _port: number;

        setPort(port: number): this {
            this._port = port;
            return this;
        }

        create(): App {
            return new App(this._port);
        }
    };
    ////

    private _app: core.Express;
    get app(): core.Express {
        return this._app;
    }

    private _port: number;
    get port(): number {
        return this._port;
    }

    constructor(port: number) {
        this._port = port;
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

export const appInstance: App = new App.AppBuilder().setPort(port).create();
