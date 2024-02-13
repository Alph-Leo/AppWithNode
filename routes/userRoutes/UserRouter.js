import { Router } from 'express';
import { UserController } from '../../controllers/userController/UserController';

const router = Router();

router.post('/signUp', UserController.createUser)
export default router;