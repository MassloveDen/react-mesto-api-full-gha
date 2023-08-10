const signupRouter = require('express').Router();

const { createUser } = require('../controllers/users');
const { validateSignup } = require('../middlewares/userValidator');

signupRouter.post('/sign-up', validateSignup, createUser);

module.exports = signupRouter;
