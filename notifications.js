const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/submit-comment", (req, res) => {
  const comment = req.body.comment;
  const email = req.body.email;

  // Use a nodemailer transport to send an email to yourself with the comment
  const transporter = nodemailer.createTransport({
    service: "comcast",
    auth: {
      user: "your-email-address",
      pass: "your-email-password"
    }
  });

  const mailOptions = {
    from: "sender@example.com",
    to: "receiver@example.com",
    subject: "New Comment Submitted",
    text: "A new comment has been submitted: " + comment
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Comment submitted successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
