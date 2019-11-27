import { Component, OnInit, Input} from '@angular/core';

class User{
  nickname: string;
  email: string;


constructor(nickname: string, email: string){
  this.nickname = nickname;
  this.email = email;
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
      new User('paco12','paco1234@gmail.com')
    ]
  }

  ngOnInit() {
  }

}
