import { Component, OnInit, Input} from '@angular/core';

export class User{
	id: number;
	name: string;
	username: string;
	password: string;
	email: string;
	address: string[];
	phone: string;

	constructor(email: string, password: string, id?: number, name?: string, username?: string, address?: string[], phone?: string){
		if(id) this.id=id;
		if(name) this.name=name;
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
	@Input() nameUser;
	users: User[];
	constructor() {
		this.users = [
			new User('paco1234@gmail.com','*****',1234,'paco','paco12',['USA','Florida'],'123456789')
		]
	}

	ngOnInit() {
	}

}
