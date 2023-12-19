const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get all the Notes using GET 'api/notes/fetchallnotes'. Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({user: req.user.id})
  res.json(notes)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


// ROUTE 2: Get all the Notes using POST 'api/notes/addnote'. Login required
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


// Route 3: Update an existing Note using PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
  const {title, description, tag} = req.body;
  // creating a Newnote object
  const newNote = {};
  if(title){newNote.title = title};
  if(description){newNote.description = description};
  if(tag){newNote.tag = tag};

  // Find the note to be updated
  let note = await Notes.findById(req.params.id);
  if(!note){return res.status(404).send("Not Found")};

  if(note.user.toString() !== req.user.id){
    return res.status(401).send("Not Allowed");
  }

  note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true});
  res.json({note})

})


module.exports = router;
