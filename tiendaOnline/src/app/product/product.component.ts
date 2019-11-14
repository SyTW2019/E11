import { Component} from '@angular/core';

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
export class ProductListComponent{
  
  products: Product[];

  constructor(){
    this.products = [
      new Product('1','Phone XL','Apple','phone','A large phone with one of the best screens',799,10,1,false),
      new Product('2','Phone Mini','Apple','phone','A great phone with one of the best cameras',699,10,1,false),
      new Product('3','Phone Standard','Apple','phone','A large phone but cheaper',299,10,1,false)
    ]
  }

 

}
