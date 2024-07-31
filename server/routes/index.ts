import { Router } from 'express';
import reservationsRouter from './reservations';

const router = Router();

router.use(reservationsRouter);

export default router;