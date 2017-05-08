'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

require('./models/drug.model');
require('./models/inventoryItem.model');
require('./models/prescription.model');
require('./models/supplier.model');
require('./models/user.model');
//require('./models/patients.model');

const DrugRouter = require('./routes/drug.route');
const InventoryItemRouter = require('./routes/inventoryItem.route');
const PrescriptionRouter = require('./routes/prescription.route');
const SupplierRouter = require('./routes/supplier.route');
const UserRouter = require('./routes/user.route');
//const PatientsRouter = require('./routes/patients.route');

const app = express();

app.use(bodyParser.json());

app.use('/app', express.static(__dirname + '/public'));

//
mongoose.connect('mongodb://localhost:27017/pharmacy', err => {
    if (err) {
        console.log(err);
        // process.exit(1);
    }
});


//
// app.get('/', (req, res) => {
//     //res.sendFile(__dirname + '/public/index.html');
//     res.redirect('/app');
// });

// app.get('/app', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });

//
// app.get('/app/*', (req, res) => {
//     res.sendFile(__dirname + '/public/login.html');
// });

app.get('/app/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });


app.use('/drugs', DrugRouter);
app.use('/inventory', InventoryItemRouter);
app.use('/prescriptions', PrescriptionRouter);
app.use('/suppliers', SupplierRouter);
app.use('/users', UserRouter);
//app.use('/patients',PatientsRouter);

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3000');
});