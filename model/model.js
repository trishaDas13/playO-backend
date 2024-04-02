const mongoose = require('mongoose');

const dataScheema = mongoose.Schema({
    productName:{
        type: String,
        require: true
    },
    cxName:{
        type: String,
        require: true
    },
    cxEmail:{
        type: String,
        require: true,
        unique: true
    },
    date:{
        type: String,
        require: true
    },
    amount:{
        type: Number,
        require: true
    },
    paymentMode:{
        type: String,
        require: true
    },
    status:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("data", dataScheema);