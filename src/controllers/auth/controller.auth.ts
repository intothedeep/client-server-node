import { Request, Response } from 'express';

const getPing = async function (_: Request, res: Response) {
    res.status(200).send('home pong');
};

export const authService = {
    getPing,
};
