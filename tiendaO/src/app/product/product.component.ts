import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CartService } from '../cart.service';

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

  productos;
  busqueda;
  tosearch;

	constructor(private httpClient: HttpClient, private cartService:CartService) {}


	configUrl = 'http://10.6.129.113:8080/users' ;
	config: any;

	public sendGetRequest() {
	  return this.httpClient.get(this.configUrl);
	}

	public sendGetRequestprod() {
	  return this.httpClient.get('http://10.6.129.113:8080/products');
	}


	searchProducts() {
	  this.httpClient.post('http://10.6.129.113:8080/search',
	     {
	  	 	search: this.tosearch
	     },
	      ).toPromise().then(data => {
	    this.busqueda = data
	  });
	}

	/*buy() {

	//PARA ACCEDER UTILIZAR data[POSICION DEL ELEMENTO EN LA LISTA].DATO_QUE_SE_QUIERE_OBTENER

	  //this.sendGetRequestprod().subscribe((data: any[])=> {
	   // alert(JSON.stringify();
	    this.createArticle();
	    //AQUI EL PRIMERO ELEMENTO ES USUARIO AKSHAY Y OBTENGO EL NOMBRE DE AHI
	 // });

	}*/


  ngOnInit(): void {
    this.sendGetRequestprod().subscribe((prods: any[])=> {
      this.productos=prods
    });
  }

}
