// hello world
console.log("hello world");
const express = require('express')

const http = require("http");
const fs = require("fs");
const generator = require("generate-password");
const nodemailer = require('nodemailer');

// server creation
const server = http.createServer(function (request, response) {
  response.write("<h1>Hello world </h1>");
  response.end();
});

server.listen(3000, (error) => {
  error
    ? console.log(error)
    : console.log("Server is running.. http://localhost:3000");
});

//file creation
fs.writeFile("welcome.txt", "hello node", (err) => {
  if (err) {
    console.log(err);
    clear;
  } else {
    console.log("File succesfuly created.");
  }
});

const data = fs.readFileSync("welcome.txt");
fs.readFile("welcome.txt", (err, data) => {
  err ? console.log(err) : console.log(data.toString());
});



///password file
fs.writeFile("password.txt", "password generator", (err) => {
    if (err) {
      console.log(err);
      clear;
    } else {
      console.log("password File succesfuly created.");
    }
  });
/// function password generator
  const password = generator.generate({
	length: 10,
	numbers: true
});


console.log(password);

///file  email

fs.writeFile("email-sender.txt", "Emailsender", (err) => {
    if (err) {
      console.log(err);
      clear;
    } else {
      console.log("email-sender  File succesfuly created.");
    }
  });


/// sending email

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your e-mail',
      pass: 'your password'
    }
  });
  
  const mailOptions = {
    from: 'messaoudi.nabil.17@gmail.com',
    to: 'iskall9217@outlook.fr',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions,(error, info)=>{
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent');
    }
  });



