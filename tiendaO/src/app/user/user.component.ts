import { Component, OnInit, Input} from '@angular/core';

export class User{
	id: number;
	firstName: string;
	lastName: string;
	password: string;
	email: string;
	address: string[];
	phone: string;

	constructor(email: string, password: string, firstName: string, lastName:string, id?: number, address?: string[], phone?: string){
		if(id) this.id=id;
		this.firstName=firstName;
		this.lastName=lastName;
		this.password=password;
		this.email = email;
		if(address) this.address=address;
		if(phone) this.phone=phone;
	}

}
@Component({
	selector: 'app-user',
	templateUrl: './user.component.html'
})

export class UserListComponent implements OnInit {
	constructor() {	}

	ngOnInit() {
	}

}
