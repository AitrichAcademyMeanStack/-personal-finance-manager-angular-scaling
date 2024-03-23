import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private apiUrl = environment.apiEndPoint

  constructor(private http: HttpClient) { }

  // Adding Expense
  addExpenditure(data: any){
       return this.http.post(`${this.apiUrl}/api/v1/expense/user/65fcfde89b5da09acbaff243`, data);
  }

  // Fetching Expense
  fetchExpenditure(){
       return this.http.get(`${this.apiUrl}/api/v1/expense/user/65fcfde89b5da09acbaff243`);
  } 

  // Deleting Expense
  deleteExpenditure(_id: string){
   return this.http.delete(
     `${this.apiUrl}/api/v1/expense/${_id}/user/65fcfde89b5da09acbaff243`
   );
   
  }

  // fetching expense category
  getExpenseCategory(){
   return this.http.get(`${this.apiUrl}/api/v1/expense-category`)
  }
}
