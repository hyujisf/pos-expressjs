const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./config/connection')
const port = 3000

// db.connect()
app.use(cors())
app.use(bodyParser.json())

const products = require('./routers/products')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/products', products)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})