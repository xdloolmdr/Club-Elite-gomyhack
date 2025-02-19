const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');
require('dotenv').config();

// Function to generate JWT token
const generateToken = (userId) => {
  const secretKey = process.env.JWT_SECRET;
  return jwt.sign({ id: userId }, secretKey);
};

// Login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Compare passwords
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = generateToken(user._id);

    // Send response with token
    res.status(200).json({
      message: 'Logged in successfully',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error in login controller:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Account Details
const getAccountDetails = async (req, res) => {
  try {
    const userId = req.user.id; 
    const user = await User.findById(userId).select('-password'); 

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error in getAccountDetails:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { login, getAccountDetails };