import express from 'express';
import UserController from '../../controllers/userController/UserController.js';

export const router = express.Router();

router.post('/signUp', UserController.createUser)

