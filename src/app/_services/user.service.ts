import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:5053/';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  studentURL = "http://localhost:5053/student";
  private teacherURL = "http://localhost:5053/teacher";

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'teacher', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  getAllStudentData(): Observable<any>{
    return this.http.get(API_URL + 'student');
  }
  getAllTeacherData():  Observable<any>{
    return this.http.get(API_URL + 'teacher');
  }
  
  getStudentById(studentId: string): Observable<any>{
    return this.http.get(`${this.studentURL}/${studentId}`);
  }

  updateStudent(studentId: string, value : any): Observable<Object>{
    return this.http.put(`${this.studentURL}/${studentId}`,value);
  }

  getTeacherById(teacherId:string): Observable<any>{
    return this.http.get(`${this.teacherURL}/${teacherId}`);
  }
  updateTeacher(teacherId:string, value): Observable<Object>{
    return this.http.put(`${this.teacherURL}/${teacherId}`,value);
  }

  deleteTeacher(teacherId:string): Observable<Object>{
    return this.http.delete(`${this.teacherURL}/${teacherId}`);
  }
  deleteStudent(studentId:string): Observable<Object>{
    return this.http.delete(`${this.studentURL}/${studentId}`);
  }
}
