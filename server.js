import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'

// this is an object
const app = express()

dotenv.config();

//data base connection
connectDB()

//middleware
app.use(express.json())
app.use(morgan('dev'))

//rest api
app.get('/', (req, res)=>{
    res.send("<h1>Welcome</h1>")
})


const PORT = process.env.PORT || 8000;   

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`.bgCyan.white)
})