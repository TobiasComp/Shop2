import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public productService:ProductService, public router:Router) { }

  ngOnInit() {
  }

  getProduct(product){
    // console.log(product);
    this.router.navigateByUrl('products/' + product.id)
    
  }
}
