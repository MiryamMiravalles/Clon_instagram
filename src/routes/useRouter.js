import express from 'express';

const router = express.Router();

import {
    newUserController,
    loginUserController,
    validateUserController,
    getOwnUserController
} from '../controllers/users/index.js';

import authUserController from '../middlewares/authUserController.js';
import userExistsController from '../middlewares/userExistsController.js';
import errorController from '../middlewares/errorController.js';

router.post('/users/register', newUserController);
router.get('/users/validate/:registrationCode', validateUserController);

router.post('users/login', loginUserController);

router.get('/user/:userId', userExistsController, errorController);

router.get('/', authUserController, getOwnUserController);

export default router;