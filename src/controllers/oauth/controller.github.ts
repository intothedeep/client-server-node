import { Axios } from '@src/lib';
import { Request, Response, NextFunction } from 'express';
import { nextTick } from 'process';

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

const getPing = async function (_: Request, res: Response) {
    res.status(200).send('githubOauthService pong');
};

const requestCode = async (req: Request, res: Response) => {
    console.log('github get callback:: ', req);

    res.send('github callback done');
};

const takeCallback = async (req: Request, res: Response, next: NextFunction) => {
    console.log('github take callback:: ', req);
    res.send('github callback done');
    next();
};
const requestAccessToken = async (req: Request, res: Response) => {
    console.log('github request access token:: ', req);
    Axios({
        method: 'post',
        url: `https://github.com/login/oauth/access_token`,
        headers: {
            accept: 'application/json',
        }, //이 부분을 작성하지 않으면 객체형태로 응답을 받지 못한다.(이 부분 작성하지 않은 result를 콘솔로 찍어보니 그냥 문자열 형태...)
        data: {
            client_id: GITHUB_CLIENT_ID,
            client_secret: GITHUB_CLIENT_SECRET,
            code: req.body.authorizationCode,
            //클라이언트가 보낸 POST요청 내 body에서 받아온 authorization code를 가지고
            //authorization server에 access token을 달라고 POST요청을 보낸다
        },
    });

    res.send('github callback done');
};

export const githubOauthService = {
    getPing,
    takeCallback,
    requestCode,
    requestAccessToken,
};
