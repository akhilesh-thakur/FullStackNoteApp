const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/NoteApp?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2"

async function connectToMongo() {
    await mongoose.connect(mongoURI)
    .then(()=> console.log("Connected to MongoDB Successfully"))
    .catch(err => console.log(err));
  }

  
module.exports = connectToMongo;