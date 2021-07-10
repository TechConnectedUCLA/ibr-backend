const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    buy_price: {
        type: String,
        required: true
    },
    buy_date: {
        type: Date,
        required: true
    },
    sell_price: {
        type: String,
    },
    sell_date: {
        type: Date
    },
    gain_loss: {
        type: String
    }
})

module.exports = Stock = mongoose.model('stock', StockSchema);
