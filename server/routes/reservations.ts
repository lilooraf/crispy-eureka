import { Router } from 'express';

import ReservationsController from "../controllers/reservations"

const router = Router();

router.get("/reservations/:id?", ReservationsController.getReservationTable)

export default router;