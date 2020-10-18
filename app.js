const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  //res.sendFile(__dirname+'/views/index.html')
  res.render('index')
  console.log('Connection established with client')
})


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})