const {Router} = require('express');
const {
    getLogIn,
    postLogIn,
    getSignUp,
    postSignUp,
    getHome
} = require('../controler/auth');
const authenticateToken = require('../middlewares/jwtauth');

const router = Router();
router.get('/home', authenticateToken, getHome);
router.get('/signup', getSignUp);

router.post('/signup', postSignUp);
router.get('/login', getLogIn);
router.post('/login', postLogIn);

module.exports =  router;