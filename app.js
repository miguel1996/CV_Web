const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/public/index.html')
  console.log('Connection established with client')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})