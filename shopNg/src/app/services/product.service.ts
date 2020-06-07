import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public myApi:string = "http://localhost:8001/products"
  products:Product[]
  public dataSubject:BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([])
  public dataBS:Observable<Product[]> = this.dataSubject.asObservable()
  
  
  constructor(public http:HttpClient) { 
    this.getAllProducts()
  }

  getAllProducts(){
    console.log("start get all products");
    
    this.http.get<Product[]>(this.myApi).subscribe(data => this.dataSubject.next(data))
    this.dataBS.subscribe(data=>{
      console.log("These are the products",data);
      
      this.products = data
    })
  }

  addProduct(newProduct):Observable<Product>{
    console.log("In the product service", newProduct);
    
    return this.http.post<Product>(this.myApi, newProduct)
  }

  addProductImage(img){
    this.http.post<String>(this.myApi+"/"+"img", {img:img})
    .subscribe(response=>console.log(response));
    
  }
}
