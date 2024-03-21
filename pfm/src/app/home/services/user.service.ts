import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiEndPoint;

  getuser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/api/v1/user/${id}`);
  }

  edituser(data: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/v1/user/65fab73f1c860ff5e300098f`, data);
  }
}
