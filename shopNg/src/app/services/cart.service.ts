import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  products: Product[] = []
  order: Order
  total:number
  
  constructor() { 
   
  }

  calculateTotal(){
    let sum:number = 0
    this.products.forEach(product=>{      
      sum += parseFloat(product.price)
    })
    this.total = sum
  }

  




}
