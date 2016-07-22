'use strict'

const express = require('express')
const http = require('http')
const path = require('path')
const app = express()

app.use(express.static(__dirname))
if (process.env.NODE_ENV !== 'production'){
  const morgan = require('morgan')
  app.use(morgan('dev')) //combined short tiny
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

const PORT = process.env.PORT || 8081
const server = http.Server(app)
server.listen(PORT, () => {
  console.log('Server Running on PORT: ' + PORT)
})
