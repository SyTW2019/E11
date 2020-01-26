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
	shipping=9.99

  constructor(private store: Store<AppState>) {
		this.shoppingItems$ = this.store.select(stored => stored.shopping)
		if (localStorage.getItem('cart')!=null && localStorage.getItem('cart')!="") {
			this.shoppingItemsLocalStorage=JSON.parse(localStorage.getItem('cart'))
			this.shoppingItemsLocalStorage.forEach(element => {
				this.store.dispatch(new AddItemAction( element ))
			})
		}
		this.observeLocalStorage()
  }

	addItem( names: string, id:string, price:number, img:string) {

		this.newShoppingItem = { id: '', name: '', price: 0, img:'' }

		this.newShoppingItem.id = id
		this.newShoppingItem.name = names
		this.newShoppingItem.price = price
		this.newShoppingItem.img = img
		this.store.dispatch(new AddItemAction( this.newShoppingItem ))
	}

	getItems(){
		return this.shoppingItems$
	}

	getItemIds(){
		var items:string[]=[]
		this.shoppingItems$.subscribe(data => {
			data.forEach(element => {
				items.push(element.id)
			})
		})
		return items
	}

	deleteItem(id: string) {
 		this.store.dispatch(new DeleteItemAction(id))
  }

	deleteAll(){
    // remove cart from local storage
    localStorage.removeItem('cart')
		this.shoppingItems$.subscribe(data => {
			data.forEach(element => {
				this.store.dispatch(new DeleteItemAction(element.id))
			})
		}).unsubscribe() //immediately unsubscribe to avoid that the subscription keeps clearing the cart
	}

	private observeLocalStorage() { //updates localStorage when shoppingItems change
		this.shoppingItems$.subscribe(val => {
			localStorage.removeItem('cart')
			localStorage.setItem('cart', JSON.stringify(val))
		})
	}

	totalprice() :number {
		var total:number = this.shipping
		this.shoppingItems$.subscribe(data => {
			data.forEach(element => {
				total+= +element.price
			})
		})
		return total
	}

}
