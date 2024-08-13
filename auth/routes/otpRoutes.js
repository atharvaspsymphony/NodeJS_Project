const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/send-otp/:email', otpController.sendOtpAPI);
router.post('/validate-otp', otpController.validateOtp);

module.exports = router;
