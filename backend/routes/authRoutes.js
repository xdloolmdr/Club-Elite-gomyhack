const express = require('express');
const authController = require("../controllers/authController")
const { authMiddleware } = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/validationMiddleware');
const { loginValidation } = require('../validations/authValidation');

const router = express.Router();

router.post('/login',validationMiddleware(loginValidation), authController.login);
router.get('/account', authMiddleware,authController.getAccountDetails);

module.exports = router;