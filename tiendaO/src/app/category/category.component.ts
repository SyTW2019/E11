import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { map, first } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
	category
	products

  constructor(
		private route: ActivatedRoute,
		private http: HttpClient,
		public cartService:CartService
	) { }

  ngOnInit() {
		this.route.params.subscribe(params => {
			this.category = params['category']
			this.http.post('http://10.6.129.113:8080/categoryItems',
		     {
		  	 	category:this.category
		     },
		      ).toPromise().then(data => {
		    this.products = data
		  })
		})
  }

}
