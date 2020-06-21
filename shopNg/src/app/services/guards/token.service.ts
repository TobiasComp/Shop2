import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClient, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { UserService } from '../user.service';

// Interceptor to add Token to each request if it exists for that user
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        console.log("This is from the interceptor",req);
        console.log("This is the current user", this.userService.currentUser);

        if (this.userService.currentUser) {
            const token = this.userService.currentUserToken
            // console.log("This is the token being sent", token);

            const clonedRequest = req.clone({
                headers: req.headers.set("Authorization", token)
            })
            // console.log(clonedRequest);

            return next.handle(clonedRequest);
        }
        return next.handle(req)

    }
}