  import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
  import { ExpenseService } from '../services/expense.service';
  import { Expense } from '../models/Expense';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { FinanceService } from '../services/finance.service';
  import { ExpenseCategory } from '../models/ExpenseCategory';

  @Component({
    selector: 'app-expense',
    templateUrl: './expense.component.html',
    styleUrls: ['./expense.component.css'],
  })
  export class ExpenseComponent implements OnInit {
    expense: Expense | any;
    expenseForm!: FormGroup;
    expCategory: ExpenseCategory | any;
    isOthersSelected = false;

    constructor(
      private expenseService: ExpenseService,
      private fb: FormBuilder,
      private service: FinanceService
    ) {}

    ngOnInit(): void {
      this.expenseForm = this.fb.group({
        title: ['', [Validators.required]],
        amount: [
          '',
          [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
        ],
        date: ['', [Validators.required]],
        category: ['', [Validators.required]],
        description: ['', [Validators.required]],
        customCategory: [''], // New form control for custom category
      });
      this.getExpense();
      this.service.totalExpense$.subscribe((totalExpense) => {
        console.log('Total Income Updated:', totalExpense);
      });
    }

    // Adding Expense
    addExpense() {
      if (this.expenseForm.valid) {
        if (this.isOthersSelected && this.expenseForm.value.customCategory) {
          this.expenseForm.value.category = {
            title: this.expenseForm.value.customCategory,
            description: 'Custom Category',
          };
        }

        this.expenseService
          .addExpenditure(this.expenseForm.value)
          .subscribe((res) => {
            this.expense = res;
            this.getExpense();
            this.expenseForm.reset();
            this.service.updateTotalExpense();
            this.isOthersSelected = false;
          });
      }
    }

    // Adding Card
    getExpense() {
      this.expenseService.fetchExpenditure().subscribe((res) => {
        this.expense = res;
        // fetching category
        this.expenseCategory();
      });
    }

    // Fetching expense category
    expenseCategory() {
      this.expenseService.getExpenseCategory().subscribe((res) => {
        this.expCategory = res;
      });
    }

    // Deleting Expense
    removeExpense(id: string) {
      this.expenseService.deleteExpenditure(id).subscribe((res) => {
        if (res) {
          this.service.updateTotalExpense();
          this.getExpense();
        }
      });
    }

    // Calculating Total Expense
    totalExpense = () => {
      let totalExpense = 0;
      this.expense.forEach((expense: Expense) => {
        totalExpense = totalExpense + expense.amount;
      });
      return totalExpense;
    };

    onCategorySelect(event: any) {
      const selectedValue = event.target.value;
      this.isOthersSelected = selectedValue === 'others';
    }
  }
