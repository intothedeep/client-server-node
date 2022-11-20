import { homeService } from './home.controller';
import { Router } from 'express';

export const router = Router();

router.get('/', homeService.getPing);
