'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const DepartmentModel = mongoose.model('Department');

const Router = express.Router();


// var dept1 = new DepartmentModel();
// dept1.deptName = "Operation Theater";
// dept1.phone = "0712016162";
// dept1.authorizedPerson = "dulakshi";
//
// var dept2 = new DepartmentModel();
// dept2.deptName = "Emergency Care Unit";
// dept2.phone = "071216102";
// dept2.authorizedPerson = "dewni";
//
// var dept3 = new DepartmentModel();
// dept3.deptName = "Intencive Care Unit";
// dept3.phone = "0712211499";
// dept3.authorizedPerson = "chamikare";
//
// var dept4 = new DepartmentModel();
// dept4.deptName = "Maternity Department";
// dept4.phone = "071345644";
// dept4.authorizedPerson = "poornima";
//
// var dept5 = new DepartmentModel();
// dept5.deptName = "Physiotherapy";
// dept5.phone = "0712353911";
// dept5.authorizedPerson = "sameera";
//
// var departments = Array(dept1, dept2, dept3, dept4, dept5);



Router.get('/', function (req, res) {
    DepartmentModel.find().then(function (depatments) {
        res.json(depatments);
    }).catch(function (err) {
        res.sendStatus(500);
    });

    // res.json(departments);
});

Router.post('/', (req, res) => {
    const department = new DepartmentModel(req.body);

    department.save(function (err,department) {
        if(err){
            console.error(err);
            res.json({success:false});
        }else{
            res.json({success:true});
        }
    });

    //departments.push(department);

});

module.exports = Router;