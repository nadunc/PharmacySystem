'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PrescriptionSchema = new Schema({

    prescriptionID: {
        type: String,
        required: true
    },
    createdDate: {
        type: String,
        required: true
    },
    prescriptionDate:{
        type: String,
        required: true
    },
    patientID: {
        type: String,
        required: true
    },
    
    druglist: {
        
            

             description: {
                type: String,
                required: true
            },

            dosage: {
                type: String,
                required: true
            },

            frequency: {
                type: String,
                required: true
            },

            period: {
                type: String,
                required: true
            },

            quantity: {
                type: String,
                required: true
            }
            

    }

   





});

const Prescription = mongoose.model('Prescription', PrescriptionSchema);

module.exports = Prescription;
