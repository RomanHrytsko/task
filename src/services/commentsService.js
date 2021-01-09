export class CommentsService{
    constructor(httpClient) {

        this.api = httpClient
        this.baseUrl = 'https://jsonplaceholder.typicode.com/comments'
    }

    getCommentsById(id){
        return this.api.get(this.baseUrl + '?postId=' + id)
    }
}