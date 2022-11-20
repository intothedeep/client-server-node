import { Router } from 'express';
import { auth } from './auth';
import { home } from './home';
import { oauth } from './oauth';

export const router = Router();

router.use('/', home);
router.use('/auth', auth);
router.use('/oauth', oauth);
