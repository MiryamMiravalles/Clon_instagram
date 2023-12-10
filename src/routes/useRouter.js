import express from 'express';

const router = express.Router();

router.post('/users/register');
router.get('/users/validate/:registrationCode');

router.post('users/login');

router.get('/');

export default router;