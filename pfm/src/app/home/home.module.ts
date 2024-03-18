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




@NgModule({
  declarations: [DashboardComponent, ExpenseComponent, IncomeComponent, TransactionsComponent, ProfileComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule , ReactiveFormsModule,RouterModule],
  exports:[DashboardComponent,ExpenseComponent,IncomeComponent,TransactionsComponent,ProfileComponent]
})
export class HomeModule {}
