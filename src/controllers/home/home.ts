import { homeService } from './home.controller';
import { Router } from 'express';

export const router = Router();

router.get('/', homeService.getPing);
router.get('/test/redirect', homeService.getPing);
