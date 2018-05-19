import { UserModel } from './user.model';
import { AuthData } from './auth-data.module';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  authChange = new Subject<boolean>();
    private user: UserModel;
    userI: any;

    constructor(private router: Router) {}

    registerUser(authData: AuthData) {
      this.userI = Math.round(Math.random() * 1000).toString;
        this.user = {
            email: authData.email,
            userId: this.userI
        };
      this.authSuccessfull();
    }

    login(authData: AuthData) {
      this.userI = Math.round(Math.random() * 1000).toString;
        this.user = {
            email: authData.email,
            userId: this.userI
        };
      this.authSuccessfull();
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    getUser() {
        return {...this.user};  // ... to spread the property in different objects
    }

    isAuth() {
        return this.user != null;
    }

    private authSuccessfull() {
      this.authChange.next(true);
      this.router.navigate(['/training']);
    }
}
