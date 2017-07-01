'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const druglistSchema = new Schema({
    drug: {
        type: String,

    },
    quantity: {
        type: String,

    },
    dosage: {
        type: String,
    }, 
    frequency: {
        type: String,
    },
    period: {
        type: String,
    },
    description: {
        type: String,

    }
});
const PrescriptionSchema = new Schema({
    prescriptionID: {
        type: String,

    },
    date: {
        type: Date,

    },
    patientID: {
        type: String,

    },
    prescriberID: {
        type: String,

    },
    druglist: [druglistSchema]

});



const Prescription = mongoose.model('Prescription', PrescriptionSchema);

module.exports = Prescription;
