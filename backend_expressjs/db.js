const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/FullStackNewsApp";

async function connectToMongo() {
    await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
  }

  
  console.log("how are you")

module.exports = connectToMongo;