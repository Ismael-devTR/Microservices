const mongoose = require("mongoose")

module.exports = mongoose.model("customer",{
    name:{ type: String, require: true},
    age: {type: Number, require: true},
    address: {type: String, require: true}
})