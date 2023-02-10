// This function is called when the user submits a comment
function submitComment() {
  const comment = document.getElementById("comment").value;
  const commentsDiv = document.getElementById("comments");

  const newCommentContainer = document.createElement("div");

  const newComment = document.createElement("div");
  newComment.innerHTML = comment;
  newCommentContainer.appendChild(newComment);

  const dateTime = new Date();
  const formattedDateTime = dateTime.toLocaleString();
  const dateTimeElement = document.createElement("div");
  dateTimeElement.innerHTML = formattedDateTime;
  newCommentContainer.appendChild(dateTimeElement);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.onclick = function() {
    commentsDiv.removeChild(newCommentContainer);

    // Remove the comment from local storage
    const existingComments = JSON.parse(localStorage.getItem("comments")) || [];
    const index = existingComments.indexOf(comment);
    if (index !== -1) {
      existingComments.splice(index, 1);
      localStorage.setItem("comments", JSON.stringify(existingComments));
    }
  };
  newCommentContainer.appendChild(deleteButton);

  commentsDiv.appendChild(newCommentContainer);

  // Save the comment and its date/time to local storage
  const existingComments = JSON.parse(localStorage.getItem("comments")) || [];
  existingComments.push({ comment, dateTime: formattedDateTime });
  localStorage.setItem("comments", JSON.stringify(existingComments));

  document.getElementById("comment").value = "";
}

// This function is called when the page loads
window.onload = function() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const commentsDiv = document.getElementById("comments");

  comments.forEach(function(commentObject) {
    const newCommentContainer = document.createElement("div");

    const newComment = document.createElement("div");
    newComment.innerHTML = commentObject.comment;
    newCommentContainer.appendChild(newComment);

    const dateTimeElement = document.createElement("div");
    dateTimeElement.innerHTML = commentObject.dateTime;
    newCommentContainer.appendChild(dateTimeElement);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function() {
      commentsDiv.removeChild(newCommentContainer);

// Remove the comment from local storage
      const existingComments = JSON.parse(localStorage.getItem("comments")) || [];
      const index = existingComments.indexOf(commentObject);
      if (index !== -1) {
        existingComments.splice(index, 1);
        localStorage.setItem("comments", JSON.stringify(existingComments));
      }
    };
    newCommentContainer.appendChild(deleteButton);

    commentsDiv.appendChild(newCommentContainer);
  });
}




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
