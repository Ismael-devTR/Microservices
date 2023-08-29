require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const { default: mongoose } = require("mongoose")
app.use(bodyParser.json())

const Order = require("./Order")
const { default: axios } = require("axios")


mongoose.connect(process.env.URL_DB).then(()=>{
    console.log("Connection success!");
})

app.get("/orders", (req, res)=>{
    Order.find().then(orders => {
        res.status(200).json(orders)
    }).catch(error =>{
        res.status(500).json({message: "An error occured on the server!"})
    })
})

app.get("/orders/:orderId", async  (req, res)=>{
    try{
        const {orderId} = req.params
        const order = await Order.findById( orderId)

        if (order) {
            const customer = await axios.get(`http://localhost:3001/customers/${order.customerId}`)
            const book = await axios.get(`http://localhost:3000/books/${order.bookId}`)

            const customResponse = {
                customerName: customer.data.name,
                bookTitle: book.data.title
            }
            res.status(200).json(customResponse)

        }else{
            res.status(404).json({message: "Order not found!"})
        }
       

        
    }catch(error){
        res.status(500).json({message: "Something went wrong on server!"})
    }
})


app.post("/orders", (req, res)=>{
    const newOrder = req.body
    const order = new Order(newOrder)
    order.save().then(order =>{
        res.status(200).json(order)
    }).catch((error)=>{
        res.status(500).json({message: error})
    })
})



app.listen(7777, ()=>{
    console.log("SERVER RUNNING");
})