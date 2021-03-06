import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router } from "@angular/router";

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        let loggedIn = Math.random() < 0.5;

        if(!loggedIn) {
            alert("You're not logged in and will be redirected to Login page");
            this.router.navigate(["/login"]);
        }

        return loggedIn;
    }
}