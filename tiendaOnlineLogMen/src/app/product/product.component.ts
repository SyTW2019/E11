import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {v4 as uuid } from 'uuid';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


class Product{
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
  buy() {
    window.alert('El producto se ha añadido correctamente');
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

export class ProductListComponent{

  products: Product[];

  constructor(private httpClient: HttpClient){
    this.products = [
      new Product('1','Phone XL','Apple','phone','A large phone with one of the best screens',799,10,1,false),
      new Product('2','Phone Mini','Apple','phone','A great phone with one of the best cameras',699,10,1,false),
      new Product('3','Phone Standard','Apple','phone','A large phone but cheaper',299,10,1,false)
    ];
  }


    configUrl = 'http://10.6.129.113:8080' ;
    config: any;

public sendGetRequest() {
  return this.httpClient.get(this.configUrl);

}

buy() {

//PARA ACCEDER UTILIZAR data[POSICION DEL ELEMENTO EN LA LISTA].DATO_QUE_SE_QUIERE_OBTENER

  this.sendGetRequest().subscribe((data: any[])=> {
    alert(JSON.stringify(data[0].name));
    //AQUI EL PRIMERO ELEMENTO ES USUARIO AKSHAY Y OBTENGO EL NOMBRE DE AHI
  });

}
  }




