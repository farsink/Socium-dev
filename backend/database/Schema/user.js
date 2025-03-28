const mangoose = require('mongoose');
const { Schema } = mangoose;

// user schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    createdAt: {
        type: Date,
        default: Date.now,      
    }
});

// create user model from schema
const User = mangoose.model('User', userSchema);

module.exports = User;