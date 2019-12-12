import { Component, OnInit } from '@angular/core'
import { FormGroup,FormControl,Validator, Validators} from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
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
	returnUrl=''

	ngOnInit(){
		// get return url from route parameters or default to '/'
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
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
    console.log(this.SignUpForm.value);
		// stop here if form is invalid
		if (this.SignUpForm.invalid || !this.SignUpForm.value.readPrivacy) {
			return;
		}
		this.loading=true

		if(this.authenticationService.signup(this.firstName.value, this.secondName.value, this.email.value, this.password.value)){
			this.success=true
			this.delay(3000).then(any=>{
				this.router.navigate([this.returnUrl])
			})
		} else {
			this.loading=false
			//show error (general, username already used,...)
		}


    /*alert("First Name : " + this.SignUpForm.value.firstName +
           "\nSecond Name : " +this.SignUpForm.value.secondName +
           "\nEamil : " + this.SignUpForm.value.email +
           "\nPassword : " + this.SignUpForm.value.password +
           "\nRead Privacy : " + this.SignUpForm.value.readPrivacy);*/
  }

}
