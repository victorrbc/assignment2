const express = require('express')
const path = require('path');
const { home } = require('nodemon/lib/utils')
const app = express()
const port = 3000

app.use(express.static("static"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/html/home.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})