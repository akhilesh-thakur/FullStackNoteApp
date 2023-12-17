const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/Users');
const router = express.Router();

const validateUser = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

router.post('/', validateUser, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const user = new User(req.body);
  
  user.save()
    .then(() => {
      res.status(201).json({ message: 'User created successfully', user });
    })
    .catch(err => {
      console.error('Error saving user:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

module.exports = router;
