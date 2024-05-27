const API_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
const API_KEY = "c33cf7a7-78ec-4150-ac97-2f7c69867d88";




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
                const newComment = await axios.post(
                    `${this.baseUrl}comments?api_key=${this.Key}`, 
                    {name: commentObject.value, 
                    date: new Date(), 
                    comment: commentObject.comment.value}
                )
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

const test2 = new BandSiteApi(API_KEY);

test2.getComment();
test2.getShows();