import { Injectable } from '@angular/core';
import { Shared } from '../../shared/services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _sharedService: Shared) {}

  getAllProducts() {
    return this._sharedService.getAll('products');
  }

  getAllCategories() {
    return this._sharedService.getAll('products/categories');
  }

  getProductsByCategory(catName: string) {
    return this._sharedService.getByName('products/category', catName);
  }
}
