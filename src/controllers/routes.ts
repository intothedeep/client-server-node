import { Router } from 'express';
import { auth } from './auth';
import { home } from './home';

export const router = Router();

router.use('/', home);
router.use('/auth', auth);
