import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { Teacher } from '../teacher';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  teacherId : string;
  teacher : Teacher
  constructor(private route: ActivatedRoute,private userService: UserService) { }

  ngOnInit(): void {
    this.teacherId = this.route.snapshot.params['teacherId'];
    this.teacher = new Teacher();
    this.userService.getTeacherById(this.teacherId).subscribe(data =>{
      this.teacher=data;
      console.log(data);
    },error => console.log(error));
  }

}
