import { Router } from '@angular/router';
import { SuperService } from './services/guards/super.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopNg';
  constructor(private superService: SuperService, private router: Router) {
    this.checkForToken();
  }

  checkForToken() {
    if (localStorage.token){
      this.superService.isLoggedIn = true;
      this.router.navigateByUrl('products');
    }
  }
}
