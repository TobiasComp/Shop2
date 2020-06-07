import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  constructor(public productService: ProductService, public router: Router) { }

  ngOnInit() {
  }

  addProduct(){
    this.router.navigateByUrl('admin-add-product')
  }
}
