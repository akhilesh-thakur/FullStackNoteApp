import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
        date:{
            type: Date,
            dafault: Date.now
        },
});

module.exports = mongoose.Model('user', UserSchema)