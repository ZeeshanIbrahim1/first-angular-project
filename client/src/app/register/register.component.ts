import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {MatIconModule} from '@angular/material/icon';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  // standalone : true,
  // imports: [MatFormFieldModule, MatInputModule, MatIconModule],
})
export class RegisterComponent {
  registerForm : FormGroup;


  ngOnInit(): void{
    this.registerForm = this.createFormGroup();
  }
  

  createFormGroup(): FormGroup{
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)])
    })
  }
  // registerForm(){

  // }
  register(){
      console.log(this.registerForm.value)
  }

}
