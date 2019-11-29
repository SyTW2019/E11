import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
		users;
		i=0;

		public sendGetRequest() {
		  return this.http.get(`${environment.apiUrl}`);

		}

    getAll() {
			this.sendGetRequest().subscribe((data: any[])=> {
		    alert(JSON.stringify(data[0].password));
				for(let entry of data){
					this.users[this.i]=new User(JSON.stringify(entry.firstName),JSON.stringify(entry.lastName))
					this.i++;
				}
				//AQUI EL PRIMERO ELEMENTO ES USUARIO AKSHAY Y OBTENGO EL NOMBRE DE AHI
			});
			return this.users;
        //return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
}
