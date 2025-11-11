import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  getAllProducts() {
    return this._http.get(`${environment.baseUrl}/products`);
  }

  getAllCategories() {
    return this._http.get(`${environment.baseUrl}/products/categories`);
  }

  getProductsByCategory(catName: string) {
    return this._http.get(`${environment.baseUrl}/products/category/${catName}`);
  }

  getProductById(id: number) {
    return this._http.get(`${environment.baseUrl}/products/${id}`);
  }
}
