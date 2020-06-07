import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public cartService: CartService, public orderService: OrderService, public router: Router) { }

  ngOnInit() {
    this.cartService.calculateTotal()
  }

  placeOrder(){
    this.orderService.placeOrder();
    this.router.navigateByUrl('order-summary')

  }
}
