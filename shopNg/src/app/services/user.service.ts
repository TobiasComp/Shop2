import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { OrderProductList } from '../models/order-product-list';
import { Observable, BehaviorSubject } from 'rxjs';
import {host } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  myApi = host + "userorders/"
  currentUser: User 
  previousOrders: OrderProductList[]
  dataSubject: BehaviorSubject<OrderProductList[]> = new BehaviorSubject<OrderProductList[]>([])
  currentUserToken: string
  public myData: Observable<OrderProductList[]> = this.dataSubject.asObservable()

  constructor(public http: HttpClient) {
    // DUMMY USER
    // this.currentUser.id = 0;
  }

  getPreviousOrders(): Observable<OrderProductList[]> {
    return this.http.get<OrderProductList[]>(this.myApi + this.currentUser.id)

  }



}

