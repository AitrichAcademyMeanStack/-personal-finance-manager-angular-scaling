

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
//   constructor(private http: HttpClient) { }
//   private apiUrl = environment.apiEndPoint;


//   uploadProfilePic(_userId: string, file: File): Observable<any> {
//     const formData: FormData = new FormData();
//     formData.append('file', file);
//     return this.http.post<any>(`${this.apiUrl}api/v1/profile/user/65fab73f1c860ff5e300098f`, formData); // Update URL construction
//   }

//   getProfilePic(_userId: string): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/api/v1/profile/user/65fab73f1c860ff5e300098f`); // Update URL construction
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }
  private apiUrl = environment.apiEndPoint;

  uploadProfilePic(userId: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('ProfilePicture', file);
    return this.http.post<any>(`${this.apiUrl}/api/v1/profile/user/${userId}`, formData);
  }

  getProfilePic(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/profile/user/${userId}`);
  }
}

