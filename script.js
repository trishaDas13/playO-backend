const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dataRouter = require("./route/route");
const cors = require("cors")

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors({
    origin:"*"
}));

//todo: connect mongoose
mongoose.connect(`mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@cluster0.oaywa5b.mongodb.net/customer_dashboard`)
.then(()=>console.log('Connected to Mongo DB'))
.catch((error)=>console.log('Failed to Connect'));

//todo: Route level middleware
app.use("/api/v1/data", dataRouter)

//todo: Server error handle
app.use("*",(req, res)=>{
    res.status(500).json({
        suceess : false,
        message : "server error"
    })
})

//todo: port listener
app.listen(process.env.PORT, (req, res) => {
    console.log(`server is up and running at port ${process.env.PORT}`);
})