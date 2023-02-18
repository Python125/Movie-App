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
    };