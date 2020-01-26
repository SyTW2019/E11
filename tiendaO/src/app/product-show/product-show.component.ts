import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { first } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html'
})
export class ProductShowComponent implements OnInit {
	product
	id
	error:String
	loaded=false


  constructor(
		private route: ActivatedRoute,
		private http: HttpClient,
		private cartService:CartService
	) { }

  ngOnInit() {
		this.route.params.subscribe(params => {
		  this.id = params['id']
			this.http.post<any>('http://10.6.129.113:8080/product', { id:this.id })
					.pipe(first())
					.subscribe(
						data => {
							this.product=data
							this.loaded=true
							console.log(this.product.name)
						},
						error => {
							if(error.status==497){ //Error 497, this is the one the backend sends on product not found
								this.error="Este producto ya no existe."
								console.log(this.error)}
							else
								this.error = error.message;
						}
					)
		})

  }
}
