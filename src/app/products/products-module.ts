import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './components/product/product';
import { AllProducts } from './components/all-products/all-products';
import { ProductDetails } from './components/product-details/product-details';



@NgModule({
  declarations: [
    Product,
    AllProducts,
    ProductDetails
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
