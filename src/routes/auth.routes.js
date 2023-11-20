const { Router } = require('express');
const { login, register, renewToken } = require('../controllers/auth.controler');
const { authUser } = require('../middlewares/user-validation.middleware');

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/renew-token', authUser, renewToken);

module.exports = router;