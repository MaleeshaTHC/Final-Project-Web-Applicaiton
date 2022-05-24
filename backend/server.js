const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')

//handling uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`)
    console.log('Shutting down the server due to Uncaught Promise Rejection')
    process.exit(1)
})

//config
dotenv.config({path:'backend/config/config.env'})

//connect database
connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

//unhandled promise rejection
process.on('unhandleRejection', (err => {
    console.log(`Error: ${err.message}`)
    console.log('Shutting down the server due to Unhandled Promise Rejection')

    server.close(() => {
        process.exit(1)
    })
}))