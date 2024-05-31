import BandSiteApi from "./band-site-api.js";

const API_KEY = "c33cf7a7-78ec-4150-ac97-2f7c69867d88";

const bandSiteApi = new BandSiteApi(API_KEY);

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

const validateForm = (name, comment) => {
    // reset error border on all elements before validation
    const errorItems = document.querySelectorAll(".error");
    errorItems.forEach(
        (item) => item.classList.remove("error")
    );

    // validate
    if (name.value.length === 0 && comment.value.length === 0) {
        name.classList.add("error");
        comment.classList.add("error");
        alert("Please enter your name and comment!");
        return false;
    } else if (name.value.length === 0) {
        name.classList.add("error");
        alert("Please enter your name!");
        return false;
    } else if (comment.value.length === 0) {
        comment.classList.add("error");
        alert("Please enter your comment!");
        return false;
    } else {
        return true;
    }
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


commentContainer.appendChild(commentBox);

const renderComments = (comments) => {

    commentBox.replaceChildren();

    comments.forEach((item) => {

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
        commentName.textContent = item.name;
        commentHeading.appendChild(commentName);

        const commentDate = document.createElement("h3");
        commentDate.classList.add("comment__submitted--date");
        const commentDateTimestamp = new Date(item.timestamp);
        commentDate.textContent = commentDateTimestamp.toLocaleDateString("es-pa");
        commentHeading.appendChild(commentDate);

        const commentDetails = document.createElement("p");
        commentDetails.classList.add("comment__submitted--details");
        commentDetails.textContent = item.comment;
        commentContent.appendChild(commentDetails);

        const divider = document.createElement("div");
        divider.classList.add("divider");
        commentSubmitted.appendChild(divider);
    })
}

const displayComments = async () => {
    try{
        const comments = await bandSiteApi.getComments(); 
        
        renderComments(comments);
    }
    catch(error){
        console.error(error);
    }
}

displayComments();


// Form validation

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const isValid = validateForm(event.target.name, event.target.comment)
    
    if (isValid === true) {
        const errorItems = document.querySelectorAll(".error");
        errorItems.forEach(
            (item) => item.classList.remove("error")  
        );

        const newComment = {
            name: event.target.name.value,
            comment: event.target.comment.value,
        };

        await bandSiteApi.postComment(newComment);
        displayComments();

        form.reset();
    }
});

