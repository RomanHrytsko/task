import {httpClient} from "./http-client";
import {UserService} from "./userService";
import {PostsServices} from "./postsServices";
import {CommentsService} from "./commentsService";

export const services = {
    userService: new UserService(httpClient),
    postsService: new PostsServices(httpClient),
    commentsService: new CommentsService(httpClient)
}