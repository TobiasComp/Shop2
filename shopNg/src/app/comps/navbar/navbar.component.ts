import { SuperService } from './../../services/guards/super.service';
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

  constructor(public userService: UserService, public router: Router, public http: HttpClient,
    private superService: SuperService) { }

  ngOnInit() {
  }

  logout() {
    this.superService.isLoggedIn = false
    this.userService.currentUser = null
    this.userService.currentUserToken = null
    localStorage.clear();
    this.router.navigateByUrl("login")
  }
}
