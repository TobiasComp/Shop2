import { SuperService } from './../../../services/guards/super.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { host } from '../../../environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupFormGroup = this.fb.group({
    user: ['', Validators.required],
    pass: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService,
    private router: Router, private superService: SuperService) { }

  ngOnInit() {
    this.signupFormGroup
  }

  signup() {
    let newUser = this.signupFormGroup.value.user;
    let newPassword = this.signupFormGroup.value.pass;
    console.log("this is hte new user and password", newUser, newPassword)
    this.http.post(host + "signup", { username: newUser, password: newPassword })
      .subscribe(response => {

        console.log(response['token'])
        this.userService.currentUserToken = "Token " + response['token']
        localStorage.setItem('token', this.userService.currentUserToken)

        this.superService.isLoggedIn = true

        this.router.navigateByUrl('products')

      });
  }
}
