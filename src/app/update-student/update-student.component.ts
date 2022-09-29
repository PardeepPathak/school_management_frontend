import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Student } from '../student';
import { UserService } from '../_services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  studentId: string;
  student : Student = new Student();
  constructor(private router: Router ,private userService: UserService,private route: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['studentId'];
    this.userService.getStudentById(this.studentId).subscribe(data =>{
     console.log(data)
      this.student = data;
    },error => console.log(error));
  }
  updateStudent(){
   this.userService.updateStudent(this.studentId,this.student)
   .subscribe(data => console.log(data), error => console.log(error)); 
   this.student = new Student();
   this.goToUserBoard();
  }
  goToUserBoard(){
    this.router.navigate(["/user"]);
  }
  onSubmit() {
    this.updateStudent();    
  }

 
}
