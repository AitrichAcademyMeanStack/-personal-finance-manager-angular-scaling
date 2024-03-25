// import { Injectable } from '@angular/core';
// import { Profile } from '../models/Profile';
// import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment.development';
// import { User } from '../models/User';

// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProfileService {

//   constructor(private http:HttpClient) { }
//   private apiUrl = environment.apiEndPoint;

//   uploaprofilepic(id: string, data: FormData): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}api/v1/profile/user/${id}/profilepic`, data);
//   }

//   getprofilepic(id: string): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}api/v1/profile/user/${id}/profilepic`);
//   }
// }


import { Injectable } from '@angular/core';
import { Profile } from '../models/Profile';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/User';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }
  private apiUrl = environment.apiEndPoint;


  uploadProfilePic(userId: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.apiUrl}api/v1/profile/user/65fab73f1c860ff5e300098f`, formData); // Update URL construction
  }

  getProfilePic(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/v1/profile/user/65fab73f1c860ff5e300098f`); // Update URL construction
  }
}
