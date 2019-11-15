import { Component, OnInit, Input} from '@angular/core';

class User{
  id: number;
  name: string;
  username: string;
  password: string;
  email: string;
  address: string[];
  phone: string;

constructor(id: number, name: string, username: string, password: string, email: string, address: string[], phone: string){
  this.id=id;
  this.name=name;
  this.username = username;
  this.password=password;
  this.email = email;
  this.address=address;
  this.phone=phone;
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
      new User(1234,'paco','paco12','*****','paco1234@gmail.com',['USA','Florida'],'123456789')
    ]
  }

  ngOnInit() {
  }

}
