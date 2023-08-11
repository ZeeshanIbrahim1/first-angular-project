import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  patientForm : FormGroup;

  constructor(private authService:AuthService){}
  ngOnInit(): void{
    this.patientForm = this.createFormGroup();
  }
  

  createFormGroup(): FormGroup{
    return new FormGroup({
      firstname: new FormControl("", [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      ssn: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      zip: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required])
    })
  }
  // patientForm(){

  // }
  addPatient(){
      console.log(this.patientForm.value)
      this.authService.patient(this.patientForm.value)
  }
}