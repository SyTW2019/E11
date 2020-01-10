import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/models/shopping-item.model';
import { AppState } from './store/models/app-state.model';
import { AddItemAction } from './store/actions/shopping-actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	shoppingItems$: Observable<Array<ShoppingItem>>;
	newShoppingItem: ShoppingItem

  constructor(private store: Store<AppState>) {
		this.shoppingItems$ = this.store.select(store => store.shopping)
  }

	addItem( names: string, id:string, price:number) {

		this.newShoppingItem = { id: '', name: '', price: 0 };

		this.newShoppingItem.id = id;
		this.newShoppingItem.name = names;
		this.newShoppingItem.price = price;

		this.store.dispatch(new AddItemAction( this.newShoppingItem ));
	}

	getItems(){
		return this.shoppingItems$
	}

	removeItem(id:string){
		// TODO
	}

}
