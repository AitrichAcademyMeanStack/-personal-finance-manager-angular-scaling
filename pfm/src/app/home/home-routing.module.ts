import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'income', component: IncomeComponent },
      { path: 'expense', component: ExpenseComponent },
     
      {path:'profile',component:ProfileComponent},
      {path: '',component:TransactionsComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
