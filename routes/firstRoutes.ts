import { Router } from 'express';
import {getFirst} from '../controllers/firstController';

const router = Router();

router.get('/welcome', (req, res) => getFirst(req, res));

export default router;
