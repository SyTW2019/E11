import { Component, OnInit } from '@angular/core'
import { FormGroup,FormControl,Validator, Validators} from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { AuthenticationService } from '../authentication.service'
import { first } from 'rxjs/operators'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit{

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

	loading=false
	success=false
	SignUpForm:FormGroup
	error=""

	ngOnInit(){
		// get return url from route parameters or default to '/'
		this.SignUpForm = new FormGroup({
	      firstName: new FormControl('',[
	        Validators.required,
	        Validators.minLength(3)
	      ]),
	      secondName: new FormControl('',[
	        Validators.required,
	        Validators.minLength(3)
	      ]),
	      email: new FormControl('',[
	        Validators.email,
	        Validators.required
	      ]),
	      password: new FormControl('',[
	        Validators.minLength(8),
	        Validators.required
	      ]),
	      readPrivacy:new FormControl('',Validators.requiredTrue)
	    })
	}



	async delay(ms: number) {
		console.log('delaying')
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
	}


  public get firstName() {
    return this.SignUpForm.get('firstName');
  }
  public get secondName() {
    return this.SignUpForm.get('secondName');
  }
  public get email() {
    return this.SignUpForm.get('email');
  }
  public get password() {
    return this.SignUpForm.get('password');
  }
  onSignUp(){
		// stop here if form is invalid
		if (this.SignUpForm.invalid || !this.SignUpForm.value.readPrivacy) {
			return;
		}
		this.loading=true

		this.authenticationService.signup(this.firstName.value, this.secondName.value, this.email.value, this.password.value)
		.pipe(first())
		.subscribe(
			data => {
				this.success=true
				this.delay(3000).then(any=>{
					this.router.navigate(['/login'])
				})
			},
			error => {
				this.loading=false
				if(error.status==498) //Error 498, this is the one the backend sends if the email is already being used
					this.error="Este correo ya se usa."
				this.error=error.message
			});
  	}

}
