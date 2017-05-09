'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BillSchema = new Schema({
    patientID: {
        type: String,
        required: true
    },
    prescriptionID: {
        type: String,
        required: true
    },

    amount: {
        type: String,
        required: true
    }
});

const Biller = mongoose.model('Biller', SupplierSchema);

module.exports = Biller;
