import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage:string
  
  loginFormGroup = this.fb.group({
    user:['', Validators.required],
    pass:['', Validators.required]
  })

  constructor(private fb:FormBuilder, private http:HttpClient, public userService:UserService, public router: Router) { }

  ngOnInit() {
    this.loginFormGroup 
  }

  login(){
    // console.log(this.loginFormGroup.value);
    // console.log(this.loginFormGroup.value.user);
    // console.log(this.loginFormGroup.value.pass);
    let myUser = this.loginFormGroup.value.user
    let myPass = this.loginFormGroup.value.pass
    this.http.post("http://localhost:8000/login", {username:myUser, password:myPass})
    .subscribe(response=>{
      
      console.log(response['token'])
      this.userService.currentUserToken = "Token "+response['token']
      // CODE TO PRACTICE AUTHENTICATION
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //       'Authorization': this.userService.currentUserToken
    //     })
    //   }
    //   console.log(httpOptions);
      
    //   this.http.get("http://localhost:8000/sample_api", httpOptions)
    //   .subscribe(res=>console.log(res));
        this.router.navigateByUrl('products')
      
     });
    
  }


}
