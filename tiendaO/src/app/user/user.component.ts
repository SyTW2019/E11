import { Component, OnInit, Input} from '@angular/core';

export class User{
	id: number;
	firstName: string;
	lastName: string;
	username: string;
	password: string;
	email: string;
	address: string[];
	phone: string;

	constructor(email: string, password: string, firstName: string, lastName:string, id?: number, username?: string, address?: string[], phone?: string){
		if(id) this.id=id;
		this.firstName=firstName;
		this.lastName=lastName;
		if(username) this.username = username;
		this.password=password;
		this.email = email;
		if(address) this.address=address;
		if(phone) this.phone=phone;
	}

}
@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})

export class UserListComponent implements OnInit {
	constructor() {	}

	ngOnInit() {
	}

}
