import {httpClient} from "./http-client";
import {UserService} from "./userService";
import {PostsServices} from "./postsServices";
import {UserPostsService} from "./userPostsService";

export const services = {
    userService: new UserService(httpClient),
    postsService: new PostsServices(httpClient),
    userPostsService: new UserPostsService(httpClient)
}