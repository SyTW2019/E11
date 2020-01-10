import { Component, OnInit } from '@angular/core'
import {AuthenticationService} from '../authentication.service'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from '../store/models/shopping-item.model';
import { AppState } from '../store/models/app-state.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-menuMej',
  templateUrl: './menuMej.component.html',
  styleUrls: ['./menuMej.component.css']
})
export class MenuMejComponent implements OnInit {
	loggedIn=false
	username=''
	shoppingItems$: Observable<Array<ShoppingItem>>
  constructor(
		private authenticationService:AuthenticationService,
		private store: Store<AppState>,
		private route: ActivatedRoute,
		private router: Router
	) { }

  ngOnInit() {
		if (this.authenticationService.currentUserValue){
			this.loggedIn=true
			this.username=this.authenticationService.currentUserValue.name
		}
		this.shoppingItems$ = this.store.select(store => store.shopping) ;
  }

	onLogOut(){
		this.authenticationService.logout()
		this.loggedIn=false
		// redirect to home
		this.router.navigate(['/']);
	}

}
