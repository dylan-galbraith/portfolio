const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());


const transport = {
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
}

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('server is ready to take messages');
  }
});

app.post('/send', (req, res, next) => {
  const fName = req.body.fName
  const lName = req.body.lName
  const email = req.body.email
  const message = req.body.message
  const content = `name: ${fName} ${lName} \n email: ${email} \n message: ${message} `

  const mail = {
    from: fName + lName,
    to: process.env.USER,
    subject: 'New Message from Contact Form',
    text: content
  }
  
  transporter.sendMail(mail, (err, data) => {
    if(err) {
      res.json({
        status:'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
});

app.listen(PORT, ()=>{
  console.log(`Server successfully running on ${PORT}`);
})