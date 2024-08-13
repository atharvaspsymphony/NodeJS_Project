const authModel = require('../models/authModel');
const jwtService = require('../services/jwtService');
const bcrypt = require('bcrypt');
const otpController = require('../controllers/otpController');
const authMiddleware = require('../middlewares/authMiddleware');

const register = async (req, res) => {
  try {
    const user = await authModel.registerUser(req.body);
    res.status(201).json(user);
    if(res.statusCode==201){
      otpReq = {
        "email":req.body.email,
        "name":req.body.name
      }
      console.log("sending");
      otpController.sendOtp(otpReq);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await authModel.findUserByEmail(req.body.email);
    
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid password' });

    const token = jwtService.generateToken(user);
    req.session.user = user; // Start session
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllClients = async(req,res) =>{
try {
  users = await authModel.getAllClients();
  res.status(200).json(users);


  
} catch (error) {
  res.status(500).json({ error: err.message });
}
};

module.exports = {
  register,
  login,
  getAllClients,
};
