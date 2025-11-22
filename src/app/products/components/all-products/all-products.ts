import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-all-products',
  standalone: false,
  templateUrl: './all-products.html',
  styleUrl: './all-products.css',
})
export class AllProducts implements OnInit {
  prdList: IProduct[] = [];
  catList: string[] = [];
  filteredList: any[] = [];
  recievedCat: string = 'all';
  carProducts: any[] = [];

  constructor(private _prdService: ProductService) {}

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this._prdService.getAllProducts().subscribe({
      next: (res: any) => {
        this.prdList = res;
        this.filteredList = res;
      },
      error: (err) => console.log(err),
    });
  }

  getCategories() {
    this._prdService.getAllCategories().subscribe({
      next: (res: any) => (this.catList = res),
      error: (err) => console.log(err),
    });
  }

  filterProducts(catId: string) {
    this.filteredList = [];
    this.recievedCat = catId;
    if (this.recievedCat === 'all') {
      this.filteredList = this.prdList;
    } else {
      this._prdService.getProductsByCategory(this.recievedCat).subscribe({
        next: (res: any) => (this.filteredList = res),
        error: (err) => console.log(err),
      });
    }
  }

  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.carProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.carProducts.find((item) => item.item.id == event.item.id);
      if (exist) {
        alert('This product is already in your cart.');
        return;
      }
      this.carProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.carProducts));
    } else {
      this.carProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.carProducts));
    }
  }
}
