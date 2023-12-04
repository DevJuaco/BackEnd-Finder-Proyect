const { Router } = require('express')
const { login, register, renewToken, getStoreById } = require('../controllers/auth-cms.controller');
const { authUser } = require('../middlewares/user-validation.middleware');

const router = Router()

router.post('/login', login);
router.post('/register', register);
router.get('/renew-token', authUser, renewToken);
router.get('/user/:id', getStoreById)

module.exports = router;