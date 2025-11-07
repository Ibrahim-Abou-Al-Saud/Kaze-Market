import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from './components/cart/cart';
import { CartService } from './services/cart.service/cart.service';



@NgModule({
  declarations: [
    Cart,
    CartService
  ],
  imports: [
    CommonModule
  ]
})
export class CartsModule { }
