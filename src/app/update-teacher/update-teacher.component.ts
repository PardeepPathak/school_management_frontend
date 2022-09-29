import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Teacher } from '../teacher';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {
  teacherId:string;
 teacher : Teacher = new Teacher();
  constructor(private router: Router ,private userService: UserService,private route: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.teacherId = this.route.snapshot.params['teacherId'];
    this.userService.getTeacherById(this.teacherId).subscribe(data =>{
      console.log(data)
      this.teacher=data
    },error => console.log(error))
  }
  updateTeacher(){
    this.userService.updateTeacher(this.teacherId,this.teacher)
    .subscribe(data => console.log(data), error => console.log(error)); 
    this.teacher = new Teacher();
    this.goToTeacherBoard();

  }

  goToTeacherBoard(){
    this.router.navigate(["/mod"]);
  }

  onSubmit(){
    this.updateTeacher();
  }
}
