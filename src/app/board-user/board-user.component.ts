import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';
import { Student } from './../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  student: Observable<Student[]>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.student = this.userService.getAllStudentData();
    console.log("got the student data", this.student);
  }
  updateStudent(studentId: string) {
    this.router.navigate(["update-student", studentId]);
  }
  deleteStudent(studentId: string) {
    if(confirm('Are you sure you wants to delete the Record??'))
    this.userService.deleteStudent(studentId).subscribe(data => {
      console.log(data)
      alert("Record Deleted SuccessFully");
      this.router.navigate(['/user']);
    });

  }
  studentDetails(studentId: string) {
    this.router.navigate(['student-details', studentId]);
  }

}
