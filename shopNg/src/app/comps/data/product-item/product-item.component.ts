import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  id:number
  product:Product
  productImagePath:string
  showCheckout: string = 'hide'
  showAddButton: string = 'show'

  constructor( public cartService: CartService, public router: Router, public activatedRoute:ActivatedRoute, public productService: ProductService ) { 
    console.log("in the product constructor");
    
  }

  ngOnInit() {
    console.log(this.activatedRoute);
    this.activatedRoute.params.subscribe(idObject  => this.id = +idObject.id);
    console.log(this.id);
    
    this.product = this.productService.products.filter( product => product.id == this.id)[0]
    this.productImagePath = "../../../../assets/images/"+this.product.name
    console.log(this.product);
    
  }

  addToCart(){
    this.cartService.products.push(this.product)
    console.log("these are the products in the cart", this.cartService.products);
    this.showAddButton = 'hide'

    this.showCheckout = 'show'
    console.log("add button value",this.showAddButton);
    
    // this.router.navigateByUrl('products')
  }

  checkout(){
    this.router.navigateByUrl('checkout')
  }

  continueShopping(){
    this.router.navigateByUrl('products')

  }

}
