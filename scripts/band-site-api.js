const API_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
const API_KEY = "c33cf7a7-78ec-4150-ac97-2f7c69867d88";


// Preset functions
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
    const commentDateTimestamp = new Date(comments.timestamp);
    commentDate.textContent = commentDateTimestamp.toLocaleDateString("es-pa");
    commentHeading.appendChild(commentDate);

    const commentDetails = document.createElement("p");
    commentDetails.classList.add("comment__submitted--details");
    commentDetails.textContent = comments.comment;
    commentContent.appendChild(commentDetails);

    const divider = document.createElement("div");
    divider.classList.add("divider");
    commentSubmitted.appendChild(divider);
}

const displayShows = (showItem) => {
    const showItems = document.createElement("div");
    showItems.classList.add("shows__show-item");
    showsContainer.appendChild(showItems);

    const showDateTitle = document.createElement("h4");
    showDateTitle.classList.add("shows__show-item--mobile-header");
    showDateTitle.textContent= "DATE";
    showItems.appendChild(showDateTitle);

    const showDate = document.createElement("p");
    showDate.classList.add("shows__show-item--date");
    const showDateTimestamp = new Date(showItem.date);
    showDate.textContent= showDateTimestamp.toDateString();
    showItems.appendChild(showDate);

    const showVenueTitle = document.createElement("h4");
    showVenueTitle.classList.add("shows__show-item--mobile-header");
    showVenueTitle.textContent= "VENUE";
    showItems.appendChild(showVenueTitle);

    const showVenue = document.createElement("p");
    showVenue.classList.add("shows__show-item--place");
    showVenue.textContent= showItem.place;
    showItems.appendChild(showVenue);

    const showLocationTitle = document.createElement("h4");
    showLocationTitle.classList.add("shows__show-item--mobile-header");
    showLocationTitle.textContent= "LOCATION";
    showItems.appendChild(showLocationTitle);

    const showLocation = document.createElement("p");
    showLocation.classList.add("shows__show-item--place");
    showLocation.textContent= showItem.location;
    showItems.appendChild(showLocation);

    const button = document.createElement("button")
    button.classList.add("shows__show-item--button");
    button.textContent = "BUY TICKETS";
    showItems.appendChild(button);

    const divider = document.createElement("div");
    divider.classList.add("divider--mobile");
    showsContainer.appendChild(divider);
}

// Class created

class BandSiteApi {
    constructor(apiKey) {
        this.Key = apiKey;
        this.baseUrl = API_URL;
    }

    postComment(commentObject) {
        // newComment = {
        //     name: commentObject.value, 
        //     date: new Date(), 
        //     comment: commentObject.comment.value,
        // }

        const createComment = async() => {
            try {
                const newComment = {name: commentObject.value, 
                    date: new Date(), 
                    comment: commentObject.comment.value}

                await axios.post(
                    `${this.baseUrl}comments?api_key=${this.Key}`, 
                    newComment
                );
                // Axios will turn the object into JSON automatically
            } catch (error) {
                console.log(error);
            }
        }

    }


    async getComment() {
            try {
                // store the response to the axios request 
                const commentsData = await axios.get(`${this.baseUrl}comments?api_key=${this.Key}`);
                // Axios already parsed JSON data when fetching
                const commentsList = commentsData.data; 

                // sorting the comment array
                commentsList.sort((a, b) => {
                    return b.timestamp - a.timestamp
                } );

                console.log(commentsList);
                commentsList.forEach((comment) => displayComments(comment));
                

            } catch (error) {
                console.log(error);
            }
        }


    async getShows() {
        
            try {
                // store the response to the axios request 
                const showsData = await axios.get(`${this.baseUrl}showdates?api_key=${this.Key}`);
                // Axios already parsed JSON data when fetching
                const showsList = showsData.data; 

                showsList.forEach((showItem) => displayShows(showItem));
                console.log(showsList);
            } catch (error) {
                console.log(error);
            }
        }
    
}


// const test = async() => {
// const datalist = await axios.get(`${API_URL}showdates?api_key=${API_KEY}`);
// console.log(datalist.data);
// }

// test();

const bioAPI = new BandSiteApi(API_KEY);
bioAPI.getComment();

const showsAPI = new BandSiteApi(API_KEY);
showsAPI.getShows();