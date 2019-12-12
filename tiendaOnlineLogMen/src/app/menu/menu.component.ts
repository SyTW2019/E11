import { Component, OnInit } from '@angular/core'
import {AuthenticationService} from '../authentication.service'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from '../store/models/shopping-item.model';
import { AppState } from '../store/models/app-state.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	loggedIn=false
	username=''
	shoppingItems$: Observable<Array<ShoppingItem>>
  constructor(private authenticationService:AuthenticationService, private store: Store<AppState>) { }

  ngOnInit() {
		if (this.authenticationService.currentUserValue){
			this.loggedIn=true
			this.username=this.authenticationService.currentUserValue.username
		}
		this.shoppingItems$ = this.store.select(store => store.shopping) ;
  }

	onLogOut(){
		this.authenticationService.logout()
		this.loggedIn=false
	}

}
