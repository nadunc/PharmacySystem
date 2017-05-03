'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StockSchema = new Schema({
    supplierId: {
        type: Schema.Types.ObjectId,
        ref: 'Supplier'
    },
    date: {
        type: String,
        required: true
    }
});

const Stock = mongoose.model('Stock', StockSchema);

module.exports = Stock;