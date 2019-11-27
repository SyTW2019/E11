import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
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

logInForm = new FormGroup(
  {
    logPassword: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]),
    logEmail: new FormControl('',[
      Validators.email,
      Validators.required
    ])
  }
)


public get logPassword() {
  return this.logInForm.get('logPassword');
}
public get logEmail() {
  return this.logInForm.get('logEmail');
}
onLogIn(){
  console.log(this.logInForm.value);
  alert("Eamil : " + this.logInForm.value.logEmail + 
          "\nPassword : " +this.logInForm.value.logPassword );
}


 viewPage = 'logIn';
 public changePage(page){
   console.log(page);
  this.viewPage = page;
 }

  
}
