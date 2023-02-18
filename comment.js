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
      };
    
      // This function is called when the page loads
    
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

          //console.log(document.getElementById('comment-section'));
    document.getElementById('comment-section').addEventListener('submit', (event) => {
        event.preventDefault();
    
        const comment = document.getElementById('comment').value;
    
        // Send the comment to the server
      });