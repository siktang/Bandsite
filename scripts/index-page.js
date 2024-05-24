// Preset functions

const displayFormFields = (targetForm) => {
    for(let i = 0; i < formFields.length; i++) {
        const item = formFields[i];

        const labelToAdd = document.createElement("label");
        labelToAdd.classList.add("comment__form--label");
        labelToAdd.innerText = item.label.text;
        labelToAdd.setAttribute("for", item.label.for);

        const fieldToAdd = document.createElement(item.field.type);
        fieldToAdd.classList.add("comment__form--field");
        for(let j = 0; j < item.field.attributes.length; j++) {
            fieldToAdd.setAttribute(item.field.attributes[j].key, item.field.attributes[j].value);
        }

        targetForm.appendChild(labelToAdd);
        targetForm.appendChild(fieldToAdd);
    }

}

const displayComments = (comments) => {
    const commentSubmitted = document.createElement("section");
    commentSubmitted.classList.add("comment__submitted");
    commentBox.appendChild(commentSubmitted);

    const commentItem = document.createElement("div");
    commentItem.classList.add("comment__submitted--item");
    commentSubmitted.appendChild(commentItem);

    const noAvatar = document.createElement("div");
    noAvatar.classList.add("comment__submitted--noAvatar");
    commentItem.appendChild(noAvatar);

    const commentContent = document.createElement("section");
    commentContent.classList.add("comment__submitted--content");
    commentItem.appendChild(commentContent);

    const commentHeading = document.createElement("div");
    commentHeading.classList.add("comment__submitted--header");
    commentContent.appendChild(commentHeading);

    const commentName = document.createElement("h3");
    commentName.classList.add("comment__submitted--name");
    commentName.textContent = comments.name;
    commentHeading.appendChild(commentName);

    const commentDate = document.createElement("h3");
    commentDate.classList.add("comment__submitted--date");
    commentDate.textContent = comments.date.toLocaleDateString("es-pa");
    commentHeading.appendChild(commentDate);

    const commentDetails = document.createElement("p");
    commentDetails.classList.add("comment__submitted--details");
    commentDetails.textContent = comments.comment;
    commentContent.appendChild(commentDetails);

    const divider = document.createElement("div");
    divider.classList.add("divider");
    commentSubmitted.appendChild(divider);
}

// Preset arrays

const formFields = [
    {
        label: {
            text: "NAME",
            for: "name"
        },
        field: {
            type: "input",
            attributes: [
                { key: "id", value: "name" },
                { key: "name", value: "name" },
                { key: "type", value: "text" },
                { key: "placeholder", value: "Enter your name" },
            ]
        }
    },
    {
        label: {
            text: "COMMENT",
            for: "comment"
        },       
        field: {
            type: "textarea",
            attributes: [
                { key: "id", value: "comment" },
                { key: "name", value: "comment" },
                { key: "placeholder", value: "Add a new comment"}
            ]
        }
    }
]


const submittedComments = [
    {
        name: "Victor Pinto",
        date: new Date("11/02/2023"),
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    }, 
    {
        name: "Christina Cabrera",
        date: new Date("10/28/2023"),
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    }, 
    {
        name: "Isaac Tadesse",
        date: new Date("10/20/2023"),
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    }, 
];


// Create comment form and list

const commentContainer = document.querySelector(".comment");

const commentHeader = document.createElement("h2");
commentHeader.classList.add("section-header");
commentHeader.innerText = "Join the Conversation";

commentContainer.appendChild(commentHeader);

const formContainer = document.createElement("section");
formContainer.classList.add("comment__form");

commentContainer.appendChild(formContainer);


const avatar = document.createElement("img");
avatar.classList.add("comment__form--avatar");
avatar.src = "./assets/Images/Mohan-muruge.jpg";
avatar.setAttribute("alt", "avatar");

formContainer.appendChild(avatar);


const form = document.createElement("form");
form.setAttribute("id", "form");
form.classList.add("comment__form--formBody");

formContainer.appendChild(form);

displayFormFields(form);

const commentButton = document.createElement("button");
commentButton.innerText = "COMMENT";
commentButton.classList.add("comment__form--button");

form.appendChild(commentButton);

const divider = document.createElement("div");
divider.classList.add("divider");

commentContainer.appendChild(divider);

/// comment box to wrap all submitted comments
const commentBox = document.createElement("div");
commentBox.classList.add("comment-box");

submittedComments.forEach((item) => displayComments(item));
commentContainer.appendChild(commentBox);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newComment = {
        name: document.getElementById("name").value, 
        date: new Date(), 
        comment: document.getElementById("comment").value,};
    
    commentBox.replaceChildren();

    submittedComments.push(newComment);
    submittedComments.sort((a, b) => {
        return b.date - a.date;
    });

    submittedComments.forEach((item) => displayComments(item));
    commentContainer.appendChild(commentBox);

    form.reset();
});


