import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  
  private apiUrl = environment.apiEndPoint


  getuser(id: string){
    return this.http.get(`${this.apiUrl}/api/v1/user/${id}`);
  }
 edituser(id:string,data: any)
 {
  return this.http.put(`${this.apiUrl}/api/v1/user/${id}`,data);
 }

}
