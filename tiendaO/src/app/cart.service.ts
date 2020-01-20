import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShoppingItem } from './store/models/shopping-item.model';
import { AppState } from './store/models/app-state.model';
import { AddItemAction, DeleteItemAction } from './store/actions/shopping-actions';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	shoppingItems$: Observable<Array<ShoppingItem>>
	newShoppingItem: ShoppingItem
	shoppingItemsLocalStorage

  constructor(private store: Store<AppState>) {
		this.shoppingItems$ = this.store.select(store => store.shopping)
		if (localStorage.getItem('cart')!=null && localStorage.getItem('cart')!="") {
			this.shoppingItemsLocalStorage=JSON.parse(localStorage.getItem('cart'))
			this.shoppingItemsLocalStorage.forEach(element => {
				this.store.dispatch(new AddItemAction( element ))
			})
		}
  }

	addItem( names: string, id:string, price:number, img:string) {

		this.newShoppingItem = { id: '', name: '', price: 0, img:'' }

		this.newShoppingItem.id = id
		this.newShoppingItem.name = names
		this.newShoppingItem.price = price
		this.newShoppingItem.img = img
		this.store.dispatch(new AddItemAction( this.newShoppingItem ))
		this.refreshLocalStorage()
	}

	getItems(){
		return this.shoppingItems$
	}

	deleteItem(id: string) {
 		this.store.dispatch(new DeleteItemAction(id))
		localStorage.removeItem('cart')
		this.refreshLocalStorage()
  }

	private refreshLocalStorage() {
		this.shoppingItems$.subscribe(val => {
			localStorage.setItem('cart', JSON.stringify(val))
		})
	}

}
