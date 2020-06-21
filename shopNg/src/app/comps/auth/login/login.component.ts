import { SuperService } from './../../../services/guards/super.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { host } from '../../../environments/environment'

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

  constructor(private fb:FormBuilder, private http:HttpClient, public userService:UserService, 
    public router: Router, private superService:SuperService) { }

  ngOnInit() {
    this.loginFormGroup 
  }

  login(){
    
    let myUser = this.loginFormGroup.value.user
    let myPass = this.loginFormGroup.value.pass
    this.http.post(host+"login", {username:myUser, password:myPass})
    .subscribe(response=>{
      
      console.log(response['token'])
      this.userService.currentUserToken = "Token "+response['token']
      localStorage.setItem('token', this.userService.currentUserToken)
      this.superService.isLoggedIn = true
        this.router.navigateByUrl('products')
      
     });
    
  }


}
