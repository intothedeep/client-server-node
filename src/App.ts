import * as core from 'express-serve-static-core';
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

import { router } from './controllers';
import path from 'path';
import mustache from 'mustache-express';

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

        // set views 기본 폴더
        this.setViewEngine();
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
        // process.cwd(): root/: working dir
        // __dirname: root/src: current file folder
        // /uploads/test.gif => /uploads: virtual path not in the folder structure
        this.app.use('/uploads', express.static(path.resolve(process.cwd(), 'src/uploads')));
        this.app.use('/public', express.static(path.resolve(process.cwd(), 'public'))); // folder: root/public => uri: /public
    }

    getRouting() {
        this.app.use(router);
    }

    setViewEngine() {
        this.app.engine('html', mustache());
        this.app.set('view engine', 'mustache');
        this.app.set('views', path.resolve(process.cwd(), 'src/views'));
    }

    status404() {
        this.app.use((req, res, _) => {
            res.status(404).render('404.html');
        });
    }
}
