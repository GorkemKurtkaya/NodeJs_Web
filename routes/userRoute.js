import express from 'express';
import * as userController from '../controllers/userController.js';
import * as authMiddleWare from '../middlewares/authMiddleWare.js';

const router = express.Router();

router.route('/register').post(userController.createUser);
router.route('/login').post(userController.loginUser);
router.route('/dashboard').get(authMiddleWare.authenticateToken, userController.getDashboardPage);
router.route('/').get(authMiddleWare.authenticateToken, userController.getAllUsers);
router.route('/:id').get(authMiddleWare.authenticateToken, userController.getAUsers);
router.route('/:id/follow').put(authMiddleWare.authenticateToken, userController.follow);
router.route('/:id/unfollow').put(authMiddleWare.authenticateToken, userController.unfollow);

export default router;