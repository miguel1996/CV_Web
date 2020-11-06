const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
    auth: {
        api_key: process.env.API_KEY ||  'key-1316c42841e03491c7932685f5927629', 
        domain: process.env.DOMAIN || 'sandbox0e16f121cfdc40a3bc04999014ffe9ca.mailgun.org' 
    }
}

const transporter = nodemailer.createTransport(mailGun(auth))


const sendMail = (subject, text, callback) => {
    const mailOptions = {
        from: 'miguel.nodemail@gmail.com',
        to: 'miguel.nodemail@gmail.com',
        subject,
        text
    }

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return callback(err, null)
        }
        return callback(null, data)
    })
}

module.exports.sendMail = sendMail