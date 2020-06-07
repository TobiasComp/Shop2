import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  constructor(public cartService: CartService, public router: Router) { }

  ngOnInit() {
  }

  continueShopping(){
    this.cartService.products = []
    this.router.navigateByUrl('products')
  }
}
