import {httpClient} from "./http-client";
import {UserService} from "./userService";
import {PostsServices} from "./postsServices";

export const services = {
    userService: new UserService(httpClient),
    postsService: new PostsServices(httpClient)
}