import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetails } from './components/product-details/product-details';
import { FormsModule } from '@angular/forms';
import { AllProducts } from './components/all-products/all-products';
import { SharedModule } from '../shared/shared-module';
import { Product } from './components/product/product';
import { AppRoutingModule } from '../app-routing-module';

@NgModule({
  declarations: [ProductDetails, AllProducts, Product],
  imports: [CommonModule, FormsModule, SharedModule, AppRoutingModule],
})
export class ProductsModule {}
