'use strict';

const express = require('express');
const mongoose = require('mongoose');


mongoose.set('debug', false);

const UserModel = mongoose.model('User');

const Router = express.Router();


Router.get('/', (req, res) => {
    UserModel.find().then(users => {
        res.json(users);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const user = new UserModel(req.body);
    user.save().then(user => {
        res.json(user);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;