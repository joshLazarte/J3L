const express = require("express"),
      router  = express.Router();

'use strict';
const nodemailer = require('nodemailer');

// home page form
router.post("/home", function(req, res){
  
  const output = `
        <b>Josh,</b>
        <p>You have a new inquiry from your website</p>
        <p>This is from the home page form</p>
        <h3>Message Details:</h3>
        <ul>
            <li><b>Name:</b> ${req.body.name}</li>
            <li><b>Business:</b> ${req.body.business}</li>
            <li><b>Phone Number:</b> ${req.body.phone}</li>
            <li><b>Email:</b> ${req.body.email}</li>
            <li><b>Message:</b> ${req.body.message}</li>
        </ul>
  `;
  
   // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAILUSER, 
            pass: process.env.EMAILPASSWORD 
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"J3L webDesign" <joshualazarte@yahoo.com>', // sender address
        to: 'joshualazarte@yahoo.com', // list of receivers
        subject: 'You Have An Inquiry!', // Subject line
        html: output // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });
        res.redirect("/");  
});

router.post("/hire", function(req, res){
  
  const output = `
        <b>Josh,</b>
        <p>You have a new inquiry from your website</p>
        <p>This is from the inquiries page form</p>
        <h3>Message Details:</h3>
        <ul>
            <li><b>Name:</b> ${req.body.name}</li>
            <li><b>Business:</b> ${req.body.business}</li>
            <li><b>Phone Number:</b> ${req.body.phone}</li>
            <li><b>Email:</b> ${req.body.email}</li>
            <li><b>Product Tier:</b> ${req.body.interest}</li>
            <li><b>Message:</b> ${req.body.message}</li>
        </ul>
  `;
  
   // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAILUSER, 
            pass: process.env.EMAILPASSWORD 
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"J3L webDesign" <joshualazarte@yahoo.com>', // sender address
        to: 'joshualazarte@yahoo.com', // list of receivers
        subject: 'You Have An Inquiry!', // Subject line
        html: output // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });
        res.redirect("/hire");  
});

  
module.exports = router;  