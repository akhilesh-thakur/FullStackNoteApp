const express = require('express');
const User = require('../models/Users');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs'); // Added bcryptjs
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;


// Creating users using "/api/auth/register" POST method
const validateUser = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

router.post('/register', validateUser, async (req, res) => { // Async function to use await with bcrypt
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Respond an error is the entered email already exists in database
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }


    // Hash the password before saving to the database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword, // Store the hashed password
    });

    await user.save();

    // generating jwt of user password and responding the same
    const data = {
      user:{
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, jwtSecret);

    res.status(201).json({authtoken});

  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Authenticating user at "/api/auth/login" POST method
const validateLogin = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').exists().withMessage('Enter a valid password'),
];

router.post('/login', validateLogin, async (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, password} = req.body;
  try {
    const user = await User.findOne({email});
    if(!user){
      return res.status(500).json({error:"Login with valid credentials"})
    }

    const passCompare = await bcrypt.compare(password, user.password);
    if(!passCompare){
      return res.status(500).json({error:"Login with valid credentials"})
    }

    const data = {
      user:{
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, jwtSecret);

    res.status(201).json({authtoken});

  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
