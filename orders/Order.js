const mongoose = require("mongoose")

module.exports = new mongoose.model("order", {
    customerId: {type: mongoose.SchemaTypes.ObjectId, required: true},
    bookId: {type: mongoose.SchemaTypes.ObjectId, required: true},
    initialDate: {type: Date, required: true},
    daliveryDate: {type: Date, required: true}
})
