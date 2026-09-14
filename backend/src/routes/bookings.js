import express from 'express';
import {
  createBooking,
  getMyBookings,
  cancelBooking,
} from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect); // All booking routes require authentication

router.route('/')
  .post(createBooking);

router.get('/my-bookings', getMyBookings);
router.put('/:id/cancel', cancelBooking);

export default router;
