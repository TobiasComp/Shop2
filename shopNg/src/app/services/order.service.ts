import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Order } from '../models/order';
import { CartService } from './cart.service';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { OrderProductList } from '../models/order-product-list';
import { host } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  products: Product[]
  order: Order
  myApi: string = host + "orders"
  constructor(public cartService: CartService, public userService: UserService, public http: HttpClient) { }

  placeOrder() {
    this.orderTable();
  }

  orderTable() {
    let newOrder: Order = new Order()
    newOrder.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    console.log("this is the date", newOrder.date.toLocaleString());

    newOrder.total_price = this.cartService.products.reduce((total, product) => total + parseFloat(product.price), 0)
    console.log(newOrder);
    newOrder.user = this.userService.currentUser.id
    this.http.post<Order>(this.myApi, newOrder)
      .subscribe(res => {
        this.order = res
        console.log(res)
        this.orderProductTable();

      });

  }

  orderProductTable() {
    // id: number
    // order_id: number
    // product_id: number
    // price: number
    // date: string
    let arrOrderProduct: OrderProductList[] = []//new OrderProductList()
    let index = 0;
    console.log("this is the order info", this.order);

    console.log(arrOrderProduct);

    this.cartService.products.forEach(product => {
      arrOrderProduct[index] = new OrderProductList()
      arrOrderProduct[index].order = this.order.id
      arrOrderProduct[index].product = product.id
      arrOrderProduct[index].price = product.price
      index++;
    })
    console.log("This is the array to be inserted into the db", arrOrderProduct);

    this.http.post<OrderProductList[]>(host + "order-product-lists/arr", arrOrderProduct)
      .subscribe(res => {
        console.log(res);
        //this.cartService.products = []
      })
  }


}
