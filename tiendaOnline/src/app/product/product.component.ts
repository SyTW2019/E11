import { Component} from '@angular/core';

class Product{
  name: string;
  price: number;
  description: string;

  constructor(name: string, price: number, description: string){
    this.name = name;
    this.price = price;
    this.description = description;
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
      new Product('Phone XL',799,'A large phone with one of the best screens'),
      new Product('Phone Mini',699,'A great phone with one of the best cameras'),
      new Product('Phone Standard',299,'')
    ]
  }

 

}
