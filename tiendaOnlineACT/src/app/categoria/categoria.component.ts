import { Component, OnInit } from '@angular/core';

class Categoria{
  name: string;
  
  constructor(name: string){
    this.name = name;
  }
}
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
 categorias: Categoria[];

  constructor() { 
    this.categorias = [
      new Categoria('Tecnología')
    ]
  }

  ngOnInit() {
  }

}
