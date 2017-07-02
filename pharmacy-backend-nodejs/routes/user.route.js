'use strict';

const express = require('express');
const mongoose = require('mongoose');
const md5 = require('md5');


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

    UserModel.findOne({userName: req.body.username, password: req.body.password}, function (err, user) {
        var tempUser = {state: "failed"};

        if (user != null) {
            // console.log(user);
            user.token = md5(new Date());
            UserModel.update({_id:user._id}, {$set:{token:md5(new Date())}}).then(function (updatedUser) {
                tempUser.id = user._id;
                tempUser.name = user.firstName + ' ' + user.lastName;
                tempUser.token = user.token;
                tempUser.state = "success";
                res.json(tempUser);
            });

            // user.save().then(function () {
            //     tempUser.id = user._id;
            //     tempUser.name = user.firstName + ' ' + user.lastName;
            //     tempUser.token = user.token;
            //     tempUser.state = "success";
            //
            // });
        }else{
            res.json(tempUser);
        }
    });

    // UserModel.findOne({userName:req.body.username, password:req.body.password}).then(function (user) {
    //     var tempUser = {state:"failed"};
    //
    //     // if(err){
    //     //     res.json(tempUser);
    //     // }else{
    //         if(user != null){
    //             user.token = md5(new Date());
    //             user.save().then(function () {
    //                 tempUser.id = user._id;
    //                 tempUser.name = user.firstName + ' ' + user.lastName;
    //                 tempUser.token = user.token;
    //                 tempUser.state = "success";
    //
    //                 // res.json(tempUser);
    //             });
    //         }
    //
    //         res.json(tempUser);
    //     // }
    // })
});

Router.post('/auth', function (req, res) {
    UserModel.findOne({_id: req.body.id}, function (err, user) {
        if (err) {
            res.send("denied");
        } else {
            if (user.token == req.body.token) {
                res.send("auth");
            } else {
                res.send("denied");
            }
        }
    });
});

module.exports = Router;