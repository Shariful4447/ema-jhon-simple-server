const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World! ema jhon')
})

app.post('/', (req, res) => {
    res.send('post started here');
})

app.listen(port)