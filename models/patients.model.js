/**
 * Created by User PC on 5/7/2017.
 */
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PatientsSchema = new Schema({
    id: {
        type: number,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Patients = mongoose.model('Patients', PatientsSchema);

module.exports = Patients;