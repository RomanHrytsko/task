export class PostsServices{
    constructor(httpClient) {
        this.api = httpClient
        this.baseUrl = 'https://jsonplaceholder.typicode.com/posts'
    }

    getPostInfo(id){
        return this.api.get(this.baseUrl + '/' + id)
    }
    getUserPosts(id){
        return this.api.get(this.baseUrl + '?userId=' +id)
    }

}