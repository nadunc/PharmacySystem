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

Router.post('/login', function (req, res) {
    UserModel.findOne({userName:req.body.username, password:req.body.password}, function (err, user) {
        if(err){
            res.sendStatus(500);
        }else{
            res.json(user);
        }
    })
});

module.exports = Router;