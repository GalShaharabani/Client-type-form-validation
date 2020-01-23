import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'EmailValidationTest';
  registerForm: FormGroup;
  submitted = false;

  clients: any =['Admin', 'Company', 'Customer'];
  
  constructor(public formBuilder: FormBuilder){}
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]],
      clientType: ['', [Validators.required]]});
  }
  /*userLogin = new FormGroup({
    primaryEmail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    
    secondaryEmail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4)])
    });  

    get primeEmail(){
      return this.userLogin.get('primaryEmail')
      }
    
    get secondEmail(){
      return this.userLogin.get('secondaryEmail')
      }

    get userPassword(){
      return this.userLogin.get('password')
       }*/

       public changeType(e){
          this.registerForm.get('clientType').setValue(e.target.value);
       }

       get f() { return this.registerForm.controls; }

       onSubmit() {
           this.submitted = true;
   
           // stop here if form is invalid
           if (this.registerForm.invalid) {
               return;
           }
   
           alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
       }
}
