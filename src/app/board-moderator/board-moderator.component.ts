import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Teacher } from './../teacher';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  teacher: Observable<Teacher[]>;

  constructor(private userService: UserService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.teacher = this.userService.getAllTeacherData();
    console.log("got the teacher data",this.teacher);
  }
  updateTeacher(teacherId:string){
    this.router.navigate(["update-teacher",teacherId])
  }
  deleteTeacher(teacherId:string){
    if(confirm('Are you sure you wants to delete the Record??'))
    this.userService.deleteTeacher(teacherId).subscribe(data=> {
      console.log(data);
      alert("Record Deleted SuccessFully");
      this.router.navigate(['/mod']);
    });
      
  }
  teacherDetails(teacherId:string){
    this.router.navigate(['teacher-details',teacherId]);
  }

}
