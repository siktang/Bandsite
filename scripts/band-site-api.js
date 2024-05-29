const API_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
const API_KEY = "c33cf7a7-78ec-4150-ac97-2f7c69867d88";


// Class created

class BandSiteApi {
    constructor(apiKey) {
        this.Key = apiKey;
        this.baseUrl = API_URL;
    }

    async postComment(commentObject) {
        // newComment = {
        //     name: commentObject.value, 
        //     date: new Date(), 
        //     comment: commentObject.comment.value,
        // }

        // send comment object to server, and receive a JSON object (which will be parsed by Axios)
        // use this method in the displayComments function, to utilize the returned object/response 
        // so instead of using form/hard-coded array data as argument for displayComments, we are now using the returned object?
        try {
            const response = await axios.post(
                `${this.baseUrl}comments?api_key=${this.Key}`, 
                commentObject
            );

            this.getComment();


        } catch (error) {
            console.log(error);
        }

        // const submitComment = async() => {
        //     try {
        //         const newComment = {
        //             name: commentObject.name.value, 
        //             comment: commentObject.comment.value}

        //         await axios.post(
        //             `${this.baseUrl}comments?api_key=${this.Key}`, 
        //             newComment
        //         );
        //         // Axios will turn the object into JSON automatically
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }

    }


    async getComment() {
            try {
                const commentsRes = await axios.get(`${this.baseUrl}comments?api_key=${this.Key}`);

                console.log(commentsRes.data);
                
                // const commentsRes = await axios.get(`${this.baseUrl}comments?api_key=${this.Key}`);
                // const commentsList = commentsRes.data;

                return commentsRes.data.sort((a, b) => {
                            return b.timestamp - a.timestamp //returning an array of comments here? 
                        } );

            } catch (error) {
                
            } 


            // try {
            //     // store the response to the axios request 
            //     const commentsData = await axios.get(`${this.baseUrl}comments?api_key=${this.Key}`);
            //     // Axios already parsed JSON data when fetching
            //     const commentsList = commentsData.data; 

            //     // sorting the comment array
            //     commentsList.sort((a, b) => {
            //         return b.timestamp - a.timestamp
            //     } );

            //     console.log(commentsList);
            //     commentsList.forEach((comment) => displayComments(comment));
                

            // } catch (error) {
            //     console.log(error);
            // }
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

export const bioAPI = new BandSiteApi(API_KEY);

// bioAPI.getComment();





// const showsAPI = new BandSiteApi(API_KEY);
// showsAPI.getShows();


// const validateForm = (name, comment) => {
//     if (name.value.length === 0) {
//         name.classList.add("error");
//         alert("Please enter your name!");
//         return false;
//     } else if (comment.value.length === 0) {
//         comment.classList.add("error");
//         alert("Please enter your comment!");
//         return false;
//     } else {
//         return true;
//     }
// }


//  form.addEventListener("submit", async (event) => {
//     event.preventDefault();

//     const isValid = validateForm(event.target.name, event.target.comment)
    
//     if (isValid === true) {
//     const errorItems = document.querySelectorAll(".error");
//         errorItems.forEach(
//             (item) => item.classList.remove("error")  
//         );

//     const newComment = {
//         name: event.target.name.value, 
//         comment: event.target.comment.value,
//     };

//     await axios.post(`${API_URL}comments?api_key=${API_KEY}`, newComment);
//     // commentBox.replaceChildren();

//     // submittedComments.unshift(newComment);

//     // submittedComments.forEach((item) => displayComments(item));
//     // commentContainer.appendChild(commentBox);

//     // form.reset();
//     }

// });