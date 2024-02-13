import express from 'express';
import { UserController } from '../../controllers/userController/UserController';

const router = express.Router();

router.post('/signUp', UserController.createUser)

export default router;