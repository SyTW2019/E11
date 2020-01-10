import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup,FormControl, Validators} from '@angular/forms'
import { AuthenticationService } from '../authentication.service'
import { first } from 'rxjs/operators'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent{
	loading=false
	logInForm:FormGroup
  error = ''

	constructor(
		private authenticationService:AuthenticationService,
		private router: Router,
    private route: ActivatedRoute
	){
		// redirect to home if already logged in
		if (this.authenticationService.currentUserValue) {
			this.router.navigate(['/'])
		}
	}

	ngOnInit() {
		this.logInForm = new FormGroup({
				logPassword: new FormControl('',[
					Validators.required,
					Validators.minLength(8)
				]),
				logEmail: new FormControl('',[
					Validators.email,
					Validators.required
				])
		})
	}

	public get logPassword() {
		return this.logInForm.get('logPassword')
	}
	public get logEmail() {
		return this.logInForm.get('logEmail')
	}
	onLogIn(){
		// stop if form is invalid
		if (this.logInForm.invalid) {
			return;
		}
		this.loading=true

		this.authenticationService.login(this.logEmail.value, this.logPassword.value)
		.pipe(first())
		.subscribe(
			data => {
				this.router.navigate(['/']);
			},
			error => {
				if(error.status==499) //Error 499, this is the one the backend sends on invalid username/password
					this.error="El correo o la contraseña están incorrectos."
				else
					this.error = error.message;
				this.loading = false;
			});
		}

		viewPage = 'logIn';
		public changePage(page){
			console.log(page);
			this.viewPage = page;
		}



	}
