import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)},
  {path: '**',component: NotfoundComponent},
  // {path: '', loadChildren: () => import('./auth/auth.module').then((m)=>m.AuthModule)}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
