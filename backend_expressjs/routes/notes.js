const express = require('express');
const { body, validationResult } = require('express-validator');
const Note = require('../models/Notes');
const router = express.Router();

const validateNote = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').isLength({ min: 6 }).withMessage('Description must be at least 6 characters long'),
];

router.post('/', validateNote, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const note = new Note(req.body);
  
  note.save()
    .then(() => {
      res.status(201).json({ message: 'Note created successfully', note });
    })
    .catch(err => {
      console.error('Error saving note:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

module.exports = router;
