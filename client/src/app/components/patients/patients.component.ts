import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  patientForm : FormGroup;


  ngOnInit(): void{
    this.patientForm = this.createFormGroup();
  }
  

  createFormGroup(): FormGroup{
    return new FormGroup({
      firstname: new FormControl("", [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)]),
    })
  }
  // patientForm(){

  // }
  addPatient(){
      console.log(this.patientForm.value)
  }
}