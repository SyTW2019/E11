import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

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
