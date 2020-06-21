import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SuperService {



  isLoggedIn = false

  // Front-end guard service if the user isn't logged in
  // only provides click protection can be circumvented by puting the 
  // route in the url bar
  constructor(public router: Router) {
    this.router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        if (this.router.url.includes('login') == false &&
          this.router.url.includes('signup') == false)
          if (this.isLoggedIn == false)
            this.router.navigateByUrl('login');
      }
    });
  }
}
