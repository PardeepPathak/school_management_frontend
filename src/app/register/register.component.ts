import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = ''; 

  constructor(private authService: AuthService,private toastr: ToastrService,private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      data => {
        this.toastr.success("You Registered SuccessFully Please login the Application");
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/login']);
        
      },
      err => {
        this.toastr.error("Sorry Registration process is not successFull ");
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
