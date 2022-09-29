import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  studentId: string;
  student: Student
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['studentId'];
    this.student = new Student();
    this.userService.getStudentById(this.studentId).subscribe(data => {
      this.student = data;
      console.log(data)
    }, error => console.log(error));
  }
  
}
