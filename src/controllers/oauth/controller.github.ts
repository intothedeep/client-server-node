import { Request, Response } from 'express';

const getPing = async function (_: Request, res: Response) {
    res.status(200).send('githubOauthService pong');
};

const takeCallback = async (req: Request, res: Response) => {
    console.log('github take callback:: ', req);
    res.send('github callback done');
};

export const githubOauthService = {
    getPing,
    takeCallback,
};
