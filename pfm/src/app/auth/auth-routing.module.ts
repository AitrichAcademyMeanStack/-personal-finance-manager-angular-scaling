import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from '../home/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',component:LandingComponent},

     
      {path:'signup',component:SignupComponent},
      {path:'login',component:LoginComponent},
      {path:'log',component:DashboardComponent}
      
]
  

// const routes: Routes = [
//   {
//     path: '', 
//     component: LandingComponent,
//     children: [
//       { path: 'login', component: LoginComponent },
//       { path: '', component: SignupComponent },
//       { path: 'signup', component:SignupComponent } ,
//     ]
//   }
// ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
