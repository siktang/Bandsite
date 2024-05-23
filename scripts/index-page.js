function appendFormFields(form) {
    
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


const commentContainer = document.querySelector(".comment");

const commentHeader = document.createElement("h2");
commentHeader.classList.add("section-header");
commentHeader.innerText = "Join the Conversation";

commentContainer.appendChild(commentHeader);

const formContainer = document.createElement("section");
formContainer.classList.add("comment__form");

commentContainer.appendChild(formContainer);

// Adding avatar

const avatar = document.createElement("img");
avatar.classList.add("comment__form--avatar");
avatar.src = "./assets/Images/Mohan-muruge.jpg";
avatar.setAttribute("alt", "avatar");

formContainer.appendChild(avatar);


// creating comment form

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
                { key: "placeholder", value: "Add a new comment"},
                { key: "placeholder", value: "Add a new comment"},
            ]
        }
    }
]

const form = document.createElement("form");
form.setAttribute("id", "form");
form.classList.add("comment__form--formBody");

formContainer.appendChild(form);

appendFormFields(form);

const commentButton = document.createElement("button");
commentButton.innerText = "COMMENT";
commentButton.classList.add("comment__form--button");

form.appendChild(commentButton);

const divider = document.createElement("div");
divider.classList.add("divider");

commentContainer.appendChild(divider);



// submitted comments section


const submittedComments = [
    {
        name: "Victor Pinto",
        date: new Date(2023, 11, 2),
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    }, 
    {
        name: "Christina Cabrera",
        date: new Date(2023, 10, 28),
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    }, 
    {
        name: "Isaac Tadesse",
        date: new Date(2023, 10, 20),
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    }, 
];



{/* <div class="comment__submitted">
                <div class="comment__submitted--item">
                    <div class="comment__submitted--noAvatar">
                    </div>
                    <section class="comment__submitted--content">
                        <div class="comment__submitted--header">
                            <h3 class="comment__submitted--name">Victor Pinto</h3>
                            <h3 class="comment__submitted--date">11/02/2023</h3>
                        </div>
                        <p class="comment__submitted--details">
                            This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.
                        </p>
                    </section>
                </div>
                <div class="divider"></div>
            </div> */}


const commentList = (comments) => {
const commentSubmitted = document.createElement("section");
commentSubmitted.classList.add("comment__submitted");
commentContainer.appendChild(commentSubmitted)

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
commentDate.textContent = comments.date;
commentHeading.appendChild(commentDate);

const commentDetails = document.createElement("p");
commentDetails.classList.add("comment__submitted--details");
commentDetails.textContent = comments.comment;
commentContent.appendChild(commentDetails);

commentSubmitted.appendChild(divider);

}

for ( i = 0; i < submittedComments.length; i++) {
    commentList(submittedComments[i]);
}

