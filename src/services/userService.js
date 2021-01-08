export class UserService {
    constructor(httpClient) {
        this.api = httpClient
        this.baseUrl = 'https://jsonplaceholder.typicode.com/users'
    }
    getUser(){
        return this.api.get(this.baseUrl)
    }


}