import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from './components/cart/cart';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Cart],
  imports: [CommonModule, FormsModule],
})
export class CartsModule {}
