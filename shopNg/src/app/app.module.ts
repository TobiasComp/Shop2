import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { LoginComponent } from './comps/auth/login/login.component';
import { SignupComponent } from './comps/auth/signup/signup.component';
import { ProductsComponent } from './comps/data/products/products.component';
import { ProductItemComponent } from './comps/data/product-item/product-item.component';
import { CheckoutComponent } from './comps/checkout/checkout.component';
import { CartComponent } from './comps/cart/cart.component';
import { OrderSummaryComponent } from './comps/order-summary/order-summary.component';
import { AdminProductsComponent } from './comps/admin/admin-products/admin-products.component';
import { AdminSalesComponent } from './comps/admin/admin-sales/admin-sales.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { AddProductComponent } from './comps/admin/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent,
    ProductItemComponent,
    CheckoutComponent,
    CartComponent,
    OrderSummaryComponent,
    ProfileComponent,
    AdminProductsComponent,
    AdminSalesComponent,
    AddProductComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
