// Make a request using the Axios library
  axios.post('/send-email', {
    comment: comment
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

const express = require('express');
const expressApp = express();
const port = 3000;
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: '',
  database: 'comments_db'
});

client.connect();

expressApp.use(express.json());

expressApp.post('/submit_comment', (req, res) => {
  var comment = req.body.comment;
  client.query(
    'INSERT INTO comments (text) VALUES ($1)',
    [comment],
    function(error, results) {
      if (error) throw error;
      res.send('Comment submitted');
    }
  );
});

expressApp.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});







const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send-email", (req, res) => {
  const comment = req.body.comment;
  const email = req.body.email;
  
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: {
      user: "username",
      pass: "password"
    }
  });

  const mailOptions = {
    from: email,
    to: "receiver@example.com",
    subject: "New Comment",
    text: `A new comment has been posted: ${comment} (from ${email})`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.send({ message: "Error sending email" });
    } else {
      console.log("Email sent: " + info.response);
      res.send({ message: "Email sent successfully" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
