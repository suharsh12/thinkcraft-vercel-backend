import express from 'express';
import { getUserCreations, toggleLikeCreation } from '../controllers/usercontroller.js';
import { auth } from '../middlewares/auth.js';

export const userRouter = express.Router();

userRouter.get('/get-user-creations', auth, getUserCreations)
userRouter.post('/toggle-like-creation', auth, toggleLikeCreation)

export default userRouter;