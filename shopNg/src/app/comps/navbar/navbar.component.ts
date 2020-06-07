import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService: UserService, public router:Router, public http:HttpClient) { }

  ngOnInit() {
  }

  logout(){
    console.log("reached the logout function");
    
    // this.http.get("http://localhost:8000/logout", httpOptions)
    this.router.navigateByUrl("login")
  }
}
