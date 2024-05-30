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
            await axios.post(
                `${this.baseUrl}/comments?api_key=${this.apiKey}`, 
                commentObject
            );

        } catch (error) {
            console.log(error);
        }


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
                const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.Key}`);
           
                return response.data; 

            } catch (error) {
                console.log(error);
            }
        }
    
}


export default BandSiteApi;

// bioAPI.getComment();





