const express =require('express')
const mongoonse = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config;
const {readdirSync} = require('fs')

//connect mongo db
const connectDB = require('./config/db')

//Routes
const authRoute = require('./Routes/auth')
//app
const app = express();

connectDB();

//*middleware ทำฉันก่อนนน
// morgan จะมาช่วยโชว์ log ในการยิง request อะไรมาบ้าง
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '20mb'}))
app.use(cors())

// Routes middleware
app.use('/api',authRoute)

// เรียกแบบ auto routes
readdirSync('./Routes')
.map((h)=>app.use('/api',require("./Routes/"+h)
))

// Run server
const port = 5000
app.listen(port,()=> console.log('Server is runing on port'+ port))

