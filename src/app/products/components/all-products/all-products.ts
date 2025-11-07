import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-all-products',
  standalone: false,
  templateUrl: './all-products.html',
  styleUrl: './all-products.css',
})
export class AllProducts implements OnInit {
  prdList: any[] = [];
  catList: string[] = [];
  filteredList: any[] = [];
  recievedCat: string = 'all';

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
}
