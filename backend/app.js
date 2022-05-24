const express = require('express')
const app = express()
const errorMiddlewear = require('./middlewear/error')

app.use(express.json())

//Route imports
const product = require('./routes/productRoute')

app.use('/api/v1', product)

//Middlewear for errors
app.use(errorMiddlewear)

module.exports = app