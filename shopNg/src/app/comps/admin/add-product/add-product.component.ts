import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductGroup = this.fb.group({
    name: [''],
    price: ['']
  })
  selectedFile: File

  constructor(public fb:FormBuilder, public productService:ProductService,public router:Router) { }

  ngOnInit() {
  }

  // STILL DOESNT WORK SINCE I NEED TO BE STORING INFO IN LOOPBACK AND
  // I THINK I PREFER TO COMBINE EXPRESS
  onFileSelected(event){
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile);
    
  }
  addProduct(){
    let newProduct = this.addProductGroup.value     
    newProduct.price = +newProduct.price
    console.log("This is the  new product", newProduct);
    this.productService.addProduct(newProduct)
    .subscribe(response=>{
      console.log(response);
      this.productService.getAllProducts();
      this.router.navigateByUrl('admin-product')
    })
    this.productService.addProductImage(newProduct.name)
  }
}
