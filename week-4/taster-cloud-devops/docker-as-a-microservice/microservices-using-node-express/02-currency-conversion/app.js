const express = require('express')
const cors = require('cors')

const currencyRouter = require('./routers/currencies')
const logger = require('./logger')

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger)

app.get("/", (req, res) => {
    res.status(200).json({
        "success": true,
        "message": "Welcome to currency-conversion"
    })
})

app.use("/currency-conversion", currencyRouter)

module.exports = app