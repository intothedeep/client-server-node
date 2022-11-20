import { githubOauthService } from './controller.github';
import { Router } from 'express';

export const router = Router();

router.get('/github', githubOauthService.getPing);
router.get('/github/callback', githubOauthService.takeCallback);
