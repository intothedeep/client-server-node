import { authService } from './controller.auth';
import { Router } from 'express';

export const router = Router();

router.get('/', authService.getPing);
