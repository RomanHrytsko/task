import {httpClient} from "./http-client";
import {UserService} from "./userService";

export const userService = {
    userService: new UserService(httpClient)
}