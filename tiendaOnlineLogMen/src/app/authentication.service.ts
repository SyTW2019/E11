import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user/user.component';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value
    }

    login(email: string, password: string) {
			console.log(email+password+"")
        return this.http.post<any>('http://10.6.129.113:8080/check', { email:email, password:password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
								return user;
            }))
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser')
        this.currentUserSubject.next(null)
    }

		signup(firstName:string, lastName:string, email:string, password:string){
			return this.http.post<any>('http://10.6.129.113:8080/insert', { /*firstName:firstName, lastName:lastName, */email:email, password:password, collection:'users' })
			.pipe(map(response => {
					console.log("Signup Response: "+response);
					return response;
			}))
			this.login(email,password)
		}
}
