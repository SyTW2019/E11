import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { ShoppingItem } from '../store/models/shopping-item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mostrar-carrito',
  templateUrl: './mostrar-carrito.component.html',
  styleUrls: ['./mostrar-carrito.component.css']
})

export class MostrarCarritoComponent implements OnInit {
  shoppingItems$: Observable<Array<ShoppingItem>>
	constructor(
		private cartService:CartService
	) { }


  ngOnInit() {
		this.shoppingItems$=this.cartService.getItems();
  }

}
