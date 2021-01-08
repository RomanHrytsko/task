export class PostsServices{
    constructor(httpClient) {
        this.api = httpClient
        this.baseUrl = 'https://jsonplaceholder.typicode.com/posts'
    }
    getPosts(){
        return this.api.get(this.baseUrl)
    }
    getPostInfo(id){
        return this.api.get(this.baseUrl + '/' + id)
    }

}