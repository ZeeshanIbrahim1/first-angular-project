import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegisterComponent } from './components/register/register.component';
import { PatientsComponent } from './components/patients/patients.component';

const routes: Routes = [
  {path: "" , component :RegisterComponent},
  {path:'navigation',component: NavigationComponent},
  {path:'login',component: LoginComponent},
  {path:'signup',component: RegisterComponent},
  {path:'patient',component: PatientsComponent},
  {path:"**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
