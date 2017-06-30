'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BillSchema = new Schema({
    patientID: {
        type: String,
        required: true
    },
   
    prescriptionNo: {
        type: String,
        required: true
    },
    invoiceDate: {
        type: Date,
        required: true
    },
    amount:{
        type: String,
        required: true
    },
    note: {
        type: String
        
    }
});

const Bill = mongoose.model('Bill', BillSchema);

module.exports = Bill;

