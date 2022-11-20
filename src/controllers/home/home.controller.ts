import { Request, Response } from 'express';

const getPing = async (_: Request, res: Response) => {
    res.status(200).send('auth pong');
};

const redirectToGoogle = async (_: any, res: Response) => {
    res.redirect('https://google.com');
};

export const homeService = {
    getPing,
    redirectToGoogle,
};
