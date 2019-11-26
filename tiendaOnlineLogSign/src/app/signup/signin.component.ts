import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{

  SignUpForm = new FormGroup(
    {
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
    }
  )
  
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
    alert("First Name : " + this.SignUpForm.value.firstName + 
           "\nSecond Name : " +this.SignUpForm.value.secondName +
           "\nEamil : " + this.SignUpForm.value.email + 
           "\nPassword : " + this.SignUpForm.value.password + 
           "\nRead Privacy : " + this.SignUpForm.value.readPrivacy);
  }

}
