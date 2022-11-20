import { homeService } from './controller.home';
import { Router } from 'express';

export const router = Router();

router.get('/', homeService.getPing);
router.get('/test/redirect', homeService.getPing);
