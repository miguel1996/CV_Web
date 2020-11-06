const express = require('express')
const app = express()
const port = 3000

const dataHandler = require('./data')
const mailHandler = require('./mail')

app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({
	extended: false
}))
app.use(express.json())

app.post('/email', (req, res) => {
	console.log("Form submitted successfully")
	console.log(`${req.body.name} has contacted you`)  	
	res.json({message: "Form submitted successfully"})
})

app.get('', (req, res) => {
  	res.render('index', dataHandler.data)
  	console.log('Connection established with client')
})


app.listen(port, () => {
  	console.log(`Listening at http://localhost:${port}`)
})