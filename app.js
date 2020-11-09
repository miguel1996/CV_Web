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
	console.log('LOG: ', "Form submitted")	
  	mailHandler.sendMail("miguel.nodemail@gmail.com",`<${req.body.emailVal}> ${req.body.nameVal} has contacted you`, req.body.messageVal, (err, data) => {
        if (err) {
            console.log('ERROR: ', err)
            return res.status(500).json({ message: err.message || 'Internal Error' })
        }
        console.log('LOG: ', 'Email sent!!!')
        return res.json({ message: 'Email sent!' })
    })
})

app.get('', (req, res) => {
  	res.render('index', dataHandler.data)
  	console.log('LOG: ', 'Connection established with client')
})


app.listen(port, () => {
  	console.log('LOG: ', `Listening at http://localhost:${port}`)
})