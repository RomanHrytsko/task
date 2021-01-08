export class UserPostsService{
    constructor(httpClient) {
        this.api = httpClient
        this.baseUrl = 'https://jsonplaceholder.typicode.com/posts?userId='
    }
    getUserPosts(id){
        return this.api.get(this.baseUrl+id)
    }
}