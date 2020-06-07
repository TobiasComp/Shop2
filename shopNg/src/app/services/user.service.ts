import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { OrderProductList } from '../models/order-product-list';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  myApi = "http://localhost:8001/userorders/"
  currentUser: User = new User()
  previousOrders: OrderProductList[]
  dataSubject: BehaviorSubject<OrderProductList[]> = new BehaviorSubject<OrderProductList[]>([])
  currentUserToken: string
  public myData: Observable<OrderProductList[]> = this.dataSubject.asObservable()

  constructor(public http: HttpClient) {
    // DUMMY USER
    this.currentUser.id = 1
  }

  getPreviousOrders(): Observable<OrderProductList[]> {
    return this.http.get<OrderProductList[]>(this.myApi + this.currentUser.id)

  }



}

