var nodemailer = require('nodemailer');


//Stape 1 author information
let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'nhcerajesh@gmail.com',
    pass: 'r25071995'
  },
  tls: {
    rejectUnauthorized: false
  }
});


//stape 2 user informaton
let HelperOptions = {
  from: '"Rajesh Saha" <nhcerajesh@gmail.com',
  to: 'rajeshs@biztechnosys.com',
  subject: 'Test ',
  //This is html formate send required html formated minifier
  html: '<table><tr><td align="center"><img src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></td></tr><tr><td>Type all Content <br><button><a href="google.in">Click Me</a></button></td></tr><tr><td align="center">This is Footer Type 123 Main St. Nashville, TN 37212</td></tr></table>'
};
//This is plane text send 
// text:'jhgh'
// };



//stape 3 sending a mail
  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
            
      return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
  });
