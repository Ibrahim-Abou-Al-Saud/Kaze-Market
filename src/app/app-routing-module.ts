import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
import { Cart } from './carts/components/cart/cart';
import { AllProducts } from './products/components/all-products/all-products';
import { ProductDetails } from './products/components/product-details/product-details';

const routes: Routes = [
  { path: 'Home', component: Home },
  { path: 'Products', component: AllProducts },
  { path: 'ProductDetails/:id', component: ProductDetails },
  { path: 'Carts', component: Cart },
  { path: 'notFound', component: NotFound },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', redirectTo: '/notFound', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
