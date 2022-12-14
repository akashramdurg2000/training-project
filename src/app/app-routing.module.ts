import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';



const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'countries' , component :CountriesComponent } ,
  {path : 'login' , component :LoginComponent } ,
  {path : 'signup' , component :SignupComponent },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
