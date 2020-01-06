import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingItem } from '../store/models/shopping-item.model';
import { AppState } from '../store/models/app-state.model';
import { Store } from '@ngrx/store';
import { AddItemAction } from '../store/actions/shopping-actions';
import {v4 as uuid } from 'uuid';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  type: string;
  price: number;
  rating: number;
  warranty_years: number;
  available: boolean;

  constructor(id: string, name: string, brand: string, type: string, description: string, price: number, rating: number, warranty_years: number, available: boolean){
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.type = type;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.warranty_years = warranty_years;
    this.available = available;
  }

}

@Component({
  selector: 'app-product-list',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ProductListComponent implements OnInit {

  products: Product[];
  productos;



shoppingItems$: Observable<Array<ShoppingItem>>;

newShoppingItem: ShoppingItem = { id: '', name: ''  };


constructor(private store: Store<AppState>, private httpClient: HttpClient) {
  this.products = [
    new Product('1', 'Phone XL', 'Apple', 'phone', 'A large phone with one of the best screens', 799, 10, 1, false),
    new Product('2', 'Phone Mini', 'Apple', 'phone', 'A great phone with one of the best cameras', 699, 10, 1, false),
    new Product('3', 'Phone Standard', 'Apple', 'phone', 'A large phone but cheaper', 299, 10, 1, false)
  ];
}


configUrl = 'http://10.6.129.113:8080/users' ;
config: any;

public sendGetRequest() {
  return this.httpClient.get(this.configUrl);
}

public sendGetRequestprod() {
  return this.httpClient.get('http://10.6.129.113:8080/products');
}

/*buy() {

//PARA ACCEDER UTILIZAR data[POSICION DEL ELEMENTO EN LA LISTA].DATO_QUE_SE_QUIERE_OBTENER

  this.sendGetRequestprod().subscribe((data: any[])=> {
    alert(JSON.stringify(data));
    //AQUI EL PRIMERO ELEMENTO ES USUARIO AKSHAY Y OBTENGO EL NOMBRE DE AHI
  });

}*/

  ngOnInit(): void {

    this.shoppingItems$ = this.store.select(store => store.shopping) ;
    this.sendGetRequestprod().subscribe((prods: any[])=> {
      this.productos=prods;
      //alert(JSON.stringify(this.productos));
    });
  }

  addItem( names: string) {

    this.newShoppingItem.id = uuid();
    this.newShoppingItem.name = names;

    this.store.dispatch(new AddItemAction( this.newShoppingItem ));

    this.newShoppingItem = { id: '', name: '' };

  }

}
