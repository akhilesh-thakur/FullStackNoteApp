const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI

async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB Successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

  
module.exports = connectToMongo;