require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


const Customer = require("./Customer")
app.use(bodyParser.json())

mongoose.connect(process.env.URL_DB).then(console.log("Connection to database mogo success"))



app.get("/customers", (req, res)=>{
    Customer.find().then((customers)=>{
        res.status(200).json(customers)
    }).catch(()=>{
        res.status(500).json({error: "Something went wrong!"})
    })
})

app.get("/customers/:customerId", (req, res)=>{
    const {customerId} = req.params
    console.log("Searching customer");
    Customer.findById(customerId).then((customer=> {
        res.status(200).json(customer)
    })).catch(()=>{
        res.status(500).json({error: "Something went wrong!"})
    })

})

app.post("/customers", (req, res)=>{
    const newCustomer = req.body
    const customer = new Customer(newCustomer)
    customer.save().then((customer)=>{
        res.status(201).json(customer)
    }).catch(()=>{
        res.status(500).json({error: "Something went wrong!"})
    })
})


app.delete("/customers/:customerId", (req, res)=>{
    const {customerId} = req.params
    Customer.deleteOne({_id: customerId}).then(()=>{
        res.status(200).json({message: "Customer removed"})
    }).catch(()=>{
        res.status(500).json({error: "Something went wrong!"})
    })
})

app.listen(3001,()=>{
    console.log("Server running on port 5000");
})