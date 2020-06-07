import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { OrderProductList } from 'src/app/models/order-product-list';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  allProducts:OrderProductList[]
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getPreviousOrders()
  }

  getPreviousOrders(){
    console.log("you clicked!");
    
    this.userService.getPreviousOrders()
    .subscribe(allOrders=>{ 
      console.log("received the request");
      console.log(allOrders);
      
      this.userService.previousOrders = allOrders 
      this.allProducts = allOrders
    })
  }
}
