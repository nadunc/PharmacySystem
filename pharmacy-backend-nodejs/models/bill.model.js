'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BillSchema = new Schema({
    patientID: {
        type: String
        
    },
   
    prescriptionNo: {
        type: String
    },
    invoiceDate: {
        type: Date
      
    },
    amount:{
        type: String
      
    },
    note: {
        type: String
        
    }
});

const Bill = mongoose.model('Bill', BillSchema);

module.exports = Bill;
