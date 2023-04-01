const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const authorRoute = require('./routes/author')
const bookRoute = require("./routes/book");

dotenv.config()

mongoose.connect((process.env.MONGODB_URI),()=>{
    console.log("connected")
})


// mongoose
// .connect(process.env.MONGODB_URI)
// .catch (error => console.log(error));



app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("comom"))

//routes
app.use('/v1/author', authorRoute)
app.use("/v1/book", bookRoute);

app.listen(8000, () => {
    console.log('success')
})