import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit {

  constructor(
		private router: Router,
		private http: HttpClient
	) { }

  ngOnInit() {
  }

	order(){
		this.http.post<any>('http://10.6.129.113:8080/insert', {
				/*TODO: send at least the products and the users email, maybe show a response like "order has been placed"*/ collection:'orders' })
		this.router.navigate(['/'])
	}

}
