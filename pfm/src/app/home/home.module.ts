import { SidebarComponent } from './../shared/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpenseComponent } from './expense/expense.component';
import { IncomeComponent } from './income/income.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';




@NgModule({
  declarations: [DashboardComponent, ExpenseComponent, IncomeComponent, TransactionsComponent, ProfileComponent, AccountComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule , ReactiveFormsModule,RouterModule],
  exports:[DashboardComponent,ExpenseComponent,IncomeComponent,TransactionsComponent,ProfileComponent,AccountComponent]
})
export class HomeModule {}
