var messagebird = require('messagebird')('FyV8WyBfaJ509UCa12Is7oGdz');
messagebird.messages.create({
    originator : '+919647707373',
    recipients : [ '+919647707373' ],
    body : 'Hello World, I am Rajesh Saha Test Sms'
},
function (err, response) {
      if (err) {
        console.log("ERROR:");
        console.log(err);
    } else {
        console.log("SUCCESS:");
        console.log(response);
    }
});