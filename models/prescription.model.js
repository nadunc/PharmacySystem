'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PrescriptionSchema = new Schema({

    prescriptionID: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    patientID:{
        type: String,
        required: true
    },
    prescriberID: {
        type: String,
        required: true
    },
    drug:{
        type: String,
        required: true
    }


});

const Prescription = mongoose.model('Prescription', PrescriptionSchema);

module.exports = Prescription;
