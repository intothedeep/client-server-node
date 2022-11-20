import { authService } from './auth.controller';
import { Router } from 'express';

export const router = Router();

router.get('/', authService.getPing);
