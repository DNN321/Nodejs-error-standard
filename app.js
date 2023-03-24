require ('dotenv').config()
require ('express-async-errors')

//security
//cors - enable secure location publicly
//helmet - protect header
//express-rate-limiter - rate the no. of request a user can make
//xss-cleaner - cleans where the user will make a request, req.body, req.params, req.query

const cors = require ('cors')
const helmet = require ('helmet')
const rateLimiter = require('express-rate-limit')
const xssClean = require ('xss-clean')
//express
const express = require ('express')
const app = express()

//DB
const connectDB = require ('./DB/connectDB')

//routes
const router = require ('./route/task')

const port = process.env.PORT || 3000
const StatusCodes = require ('http-status-codes')
const notFoundMiddleware = require('./middleware/cannot-be-found')
const errorHandlerMiddleware = require ('./middleware/error-handler')

app.set('trust proxy', 1)
app.use(rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100,
}))
app.use(helmet())
app.use(cors())
app.use(xssClean())

app.use(express.json())
app.use ('/api/v1', router)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async (req,res)=>{
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('connected to Database')
        app.listen(port,()=>{console.log(`listening to port, ${port}`)})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:error})        
    }

}

start()