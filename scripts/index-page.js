let commentContainer = document.querySelector(".comment");

let commentHeader = document.createElement("h2");
commentHeader.classList.add("section-header");
commentHeader.innerText = "Join the Conversation";

commentContainer.appendChild(commentHeader);

// adding avatar

let avatarContainer = document.createElement("div");
avatarContainer.classList.add("comment__avatar-container");

commentContainer.appendChild(avatarContainer);

let avatar = document.createElement("IMG");
avatar.classList.add("comment__avatar-container--img");
avatar.src = "./assets/Images/Mohan-muruge.jpg";
avatar.setAttribute("alt", "avatar");

avatarContainer.appendChild(avatar);

// creating comment form

let form = document.createElement("form");
form.setAttribute("id", "form");
form.classList.add("comment__form");

commentContainer.appendChild(form);

function createFormFields(form, formFieldsToAdd) {
    
    for(let i = 0; i < formFieldsToAdd.length; i++) {
        const item = formFieldsToAdd[i];

        // create label pair for each object
        const labelToAdd = document.createElement("label");
        labelToAdd.classList.add("comment__form--label");
        labelToAdd.innerText = item.label.text;
        labelToAdd.setAttribute("for", item.label.for);

        // create field for each object
        const fieldToAdd = document.createElement(item.field.type);
        fieldToAdd.classList.add("comment__form--field");
        for(let j = 0; j < item.field.attributes.length; j++) {
            fieldToAdd.setAttribute(item.field.attributes[j].key, item.field.attributes[j].value);
        }

        form.appendChild(labelToAdd);
        form.appendChild(fieldToAdd);
    }

    return;
}

const formFieldsToAdd = [
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
                { key: "placeholder", value: "Enter your name" }
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
                { key: "placeholder", value: "Add a new comment" }
            ]
        }
    }
]

createFormFields(form, formFieldsToAdd);

let divider = document.createElement("div");
divider.classList.add("divider");

form.appendChild(divider);



// default comments section

let defaultArea = document.createElement("section");
defaultArea.classList.add("comments__default");

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

const username = document.createElement("h3");
username.classList.add("username");

const postdate = document.createElement("h3");
postdate.classList.add("date");



