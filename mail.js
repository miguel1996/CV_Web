const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
	auth:{
		api_key: 'ADD PRIVATE KEY',
		domain: 'ADD DOMAIN'
	}
}

const handler = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
	from: 'miguel.nodemail@gmail.com',
	to: 'miguel.nodemail@gmail.com',
	subject: 'Message Sent From Website',
	text: 'Hello there!'
}

handler.sendMail(mailOptions, (err, data)=>{
	if(err){
		console.log(err)
	}
	else{
		console.log("Email sent")
	}
})