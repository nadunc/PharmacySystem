'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true
    },
    token:{
        type: String,
    }
    // comments: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Comment'
    // }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;