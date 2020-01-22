import { Component, OnInit } from '@angular/core'
import {AuthenticationService} from '../authentication.service'
import { Observable } from 'rxjs';
import { ShoppingItem } from '../store/models/shopping-item.model';
import { Router, ActivatedRoute } from '@angular/router'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	loggedIn=false
	username=''
	shoppingItems$: Observable<Array<ShoppingItem>>
  constructor(
		private authenticationService:AuthenticationService,
		private route: ActivatedRoute,
		private router: Router,
		private cartService:CartService
	) { }

  ngOnInit() {
		this.authenticationService.currentUser.subscribe(change => {
			if (this.authenticationService.currentUserValue){
				this.loggedIn=true
				this.username=this.authenticationService.currentUserValue.firstName
			}
		})

		this.shoppingItems$=this.cartService.getItems();
  }

	onLogOut(){
		this.authenticationService.logout()
		this.loggedIn=false
		// redirect to home
		this.router.navigate(['/']);
	}

}
