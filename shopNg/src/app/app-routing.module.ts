import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './comps/data/products/products.component';
import { ProductItemComponent } from './comps/data/product-item/product-item.component';
import { CheckoutComponent } from './comps/checkout/checkout.component';
import { CartComponent } from './comps/cart/cart.component';
import { OrderSummaryComponent } from './comps/order-summary/order-summary.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { AdminSalesComponent } from './comps/admin/admin-sales/admin-sales.component';
import { AdminProductsComponent } from './comps/admin/admin-products/admin-products.component';
import { AddProductComponent } from './comps/admin/add-product/add-product.component';
import { LoginComponent } from './comps/auth/login/login.component';
import { SignupComponent } from './comps/auth/signup/signup.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent},
  { path: 'products/:id', component: ProductItemComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'cart', component: CartComponent},
  { path: 'order-summary', component: OrderSummaryComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'admin-product', component: AdminProductsComponent},
  { path: 'admin-sales', component: AdminSalesComponent},
  { path: 'admin-add-product', component: AddProductComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
