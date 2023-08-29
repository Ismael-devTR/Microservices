require("dotenv").config()
const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const Book = require("./Book")

app.use(bodyParser.json())
mongoose.connect(process.env.URL_DB).then(console.log("Connection to database mogo success"))
app.get("/books", (req, res)=>{
    Book.find().then((books)=> {
        res.status(200).json(books)
    }).catch((error)=> {
        res.status(500).json({error: "Something went wrong"})
    })
})

app.get("/books/:bookId", (req, res)=>{
    const {bookId} = req.params
    Book.findById(bookId).then((book => {
        res.status(200).json(book)
    })).catch((error)=>{
        res.status(404).json({error: "Book not found"})
    })

})

app.post("/books", (req, res)=>{
    const newBook = req.body
    const book = new Book(newBook)
    book.save().then(()=>{
        console.log("Book created");
        res.status(201).json(newBook)
    }).catch(() => res.status(500).json({error: "Something went wrong!"}))
})
 
app.delete("/books/:bookId", (req, res)=>{
    const {bookId} = req.params

    Book.deleteOne({_id: bookId}).then((book => {
        res.status(200).json({message: "Book removed"})
    })).catch((error)=> {
        res.status(500).json({error: "Somethnig went wrong!"})
    })
})

app.listen(3000, ()=>{
    console.log("Server running! this is the book service");
})