import { Component, OnInit } from '@angular/core'
import {Product} from '../product/product.component'
import { Router, ActivatedRoute } from '@angular/router'
import { map, first } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
	product:Product
	picture
	id:number
	error:String
	loaded=false

  constructor(
		private route: ActivatedRoute,
		private http: HttpClient
	) { }

  ngOnInit() {
		this.route.params.subscribe(params => {
		  this.id = params['id']
			console.log(this.id)
			this.http.post<any>('http://10.6.129.113:8080/product', { id:this.id })
					.pipe(first())
					.subscribe(
						data => {
							this.product=new Product(data.id, data.name, data.brand, data.type, data.description, data.price, data.rating, data.warranty_years, data.available)
							this.loaded=true
							console.log(this.product.name)
						},
						error => {
							if(error.status==497){ //Error 497, this is the one the backend sends on product not found
								this.error="Este producto ya no existe."
								console.log(this.error)}
							else
								this.error = error.message;
						})
	 	});
  }

}
