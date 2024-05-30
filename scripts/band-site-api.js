const API_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";


// Class created

class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
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
                `${this.baseUrl}/comments?api_key=${this.apiKey}`, 
                commentObject
            );

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


    async getComments() {
            try {
                const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
                
                const commentsList = response.data;
                commentsList.sort((a, b) => {
                            return b.timestamp - a.timestamp 
                        } );
                
                return commentsList;
            } catch (error) {
                console.log(error);
            } 
        }

    async getShows() {
        
            try {
                // store the response to the axios request 
                const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.Key}`);
                // Axios already parsed JSON data when fetching
                return response.data; 

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

export default BandSiteApi;

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