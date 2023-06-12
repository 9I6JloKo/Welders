import express from 'express';
import { signIn, logout } from '../controllers/auth.controller.js';

const router = express.Router();
router.post('/sign-in', signIn);
router.delete('/logout', logout);

export default router;