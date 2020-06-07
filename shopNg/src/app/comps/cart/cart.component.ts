import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService, public orderService: OrderService,
    public router: Router) { }

  ngOnInit() {
    this.cartService.calculateTotal()
  }

  placeOrder(){
    this.orderService.placeOrder();
    this.router.navigateByUrl('order-summary')
  }

}
