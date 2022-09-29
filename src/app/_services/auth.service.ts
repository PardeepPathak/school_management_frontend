import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

const AUTH_API = 'http://localhost:5053/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private toastr: ToastrService) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'api/auth/signin', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  register(student): Observable<any> {
    return this.http.post( AUTH_API + 'student', {
      firstName:student.firstName,
      lastName:student.lastName,
      userRole:student.userRole,
      dob:student.dob,
      address:student.address,
      email: student.email,
      password: student.password,
      dateOfAdmission:student.dateOfAdmission
    }, httpOptions);
  }
}
