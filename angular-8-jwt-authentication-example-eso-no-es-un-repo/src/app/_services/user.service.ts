import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import {Observable, of} from 'rxjs'


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
		users:User[]=[];
		usuario;
		i=0;

		public sendGetRequest() {
		  return this.http.get(`${environment.apiUrl}`);

		}

    getAll():Observable<User[]> {
			this.sendGetRequest().subscribe((data: any[])=> {
				for(let entry of data){
					this.usuario =new User(entry.firstName,entry.lastName)
					this.users[this.i]=this.usuario
					this.i++;
				}
			});
			return of(this.users); //trasformarlo en un observable con 'of' porque el pipe en el HomeComponent necesita un observable
    }
}
