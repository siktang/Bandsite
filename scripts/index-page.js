let commentContainer = document.querySelector(".comment");

let commentHeader = document.createElement("h2");
commentHeader.classList.add("section-header");
commentHeader.innerText = "Join the Conversation";

commentContainer.appendChild(commentHeader);

// creating comment form

let avatar = document.createElement("img");
commentHeader.classList.add("comment__avatar");


let formContainer = document.createElement("div");
formContainer.classList.add("comment__formContainer");

commentContainer.appendChild(formContainer);

let form = document.createElement("form");
form.setAttribute("id", "form");

formContainer.appendChild(form);

let nameLabel = document.createElement("label");
nameLabel.setAttribute("for", "name");
nameLabel.innerText = "NAME";

form.appendChild(nameLabel);

let nameInput = document.createElement("input");
nameInput.setAttribute("id", "name");
nameInput.setAttribute("name", "name");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("placeholder", "Enter your name");

form.appendChild(nameInput);

let commentLabel = document.createElement("label");
commentLabel.setAttribute("for", "comment");
commentLabel.innerText = "COMMENT";

form.appendChild(commentLabel);

let commentTextarea = document.createElement("textarea");
commentTextarea.setAttribute("id", "comment");
commentTextarea.setAttribute("name", "comment");
commentTextarea.setAttribute("type", "text");
commentTextarea.setAttribute("placeholder", "Add a new comment");

form.appendChild(commentTextarea);


// default comments section

const defaultComments = [
    {
        name: "Victor Pinto",
        date: "11/02/2023",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    }, 
    {
        name: "Christina Cabrera",
        date: "10/28/2023",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    }, 
    {
        name: "Isaac Tadesse",
        date: "10/20/2023",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    }, 
];