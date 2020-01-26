import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { CartService } from '../cart.service'
import {AuthenticationService} from '../authentication.service'
import { first, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'


@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit {

  constructor(
		private authenticationService:AuthenticationService,
		private router: Router,
		private http: HttpClient,
		private cartService:CartService
	) { }

  ngOnInit() {
  }

	order(){
		this.http.post<any>('http://10.6.129.113:8080/insert', {
			items:this.cartService.getItemIds(),
			user:this.authenticationService.currentUserValue.id,
			total:this.cartService.totalprice(),
			state:'paid',
			collection:'pedidos' })
			.pipe(
				catchError(this.handleError)
			)
		this.cartService.deleteAll();
		this.router.navigate(['/'])
	}

	private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'No se ha podido procesar el pedido, lo sentimos.');
	}

}
