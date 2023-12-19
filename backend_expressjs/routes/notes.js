const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get all the Notes using GET 'api/auth/fetchallnotes'. Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({user: req.user.id})
  res.json(notes)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


// ROUTE 2: Get all the Notes using POST 'api/auth/addnote'. Login required
router.post('/addnote', fetchuser, [
  body('title', 'Enter a valid title').isLength({min:3}),
  body('description', 'Description must be atleast of 5 characters').isLength({min:5}),
], async (req, res) => {
  try {
    const {title, description, tag} = req.body
  // return bad request if any error occurred
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  }
  const note = new Notes({
    title, description, tag, user: req.user.id
  })
  const savedNote = await note.save()

  res.json(savedNote)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Enternal Server Error")
  }
  
});


module.exports = router;
