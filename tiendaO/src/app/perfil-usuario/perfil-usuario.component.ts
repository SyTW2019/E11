import { Component, OnInit } from '@angular/core'
import {AuthenticationService} from '../authentication.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
	user

  constructor(
		private authenticationService:AuthenticationService,
		private route: ActivatedRoute,
		private router: Router
	) {
			// redirect to login if not logged in
			if (! this.authenticationService.currentUserValue) {
					this.router.navigate(['/login']);
			} else {
				this.user=this.authenticationService.currentUserValue
				console.log(JSON.stringify(this.user))
			}
	}

  ngOnInit() {
  }

}
