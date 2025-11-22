import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from './components/cart/cart';
import { CartService } from './services/cart.service/cart.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Cart, CartService],
  imports: [CommonModule, FormsModule],
})
export class CartsModule {}
