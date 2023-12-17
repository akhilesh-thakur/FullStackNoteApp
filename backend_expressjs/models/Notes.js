import mongoose from 'mongoose';
const { Schema } = mongoose;

const NotesSchema = new Schema({
        tittle:{
            type: String,
            required: true
        },
        description:{
            type: String,
            unique: true
        },
        tag:{
            type: String,
            default: "General"
        },
        date:{
            type: Date,
            dafault: Date.now
        },
});

module.exports = mongoose.Model('notes', NotesSchema)