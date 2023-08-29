const mongoose = require("mongoose");

module.exports =  mongoose.model("book", {
    title: {type: String},
    author: {type: String, require: true},
    numberPages: {type: String, require: false},
    publisher: {type: String, require: false}
})
