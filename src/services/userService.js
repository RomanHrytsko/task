export class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient
        this.baseUrl = 'https://jsonplaceholder.typicode.com/users'
    }
    getUser(){
        return this.httpClient.get(this.baseUrl)
    }
}