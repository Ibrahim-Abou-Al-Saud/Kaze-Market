import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { Location } from '@angular/common';
import { LoaderService } from '../../../shared/services/loader.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  id: any;
  products: IProduct[] = [];
  data: any = {};
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _prdService: ProductService,
    private _location: Location,
    private _router: Router,
    protected _loader: LoaderService
  ) {}

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe({
      next: (parm) => {
        this.id = parm.get('id');
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.getProduct();
  }

  getProduct() {
    this._prdService.getProductById(this.id).subscribe({
      next: (res) => {
        this.data = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  goBack() {
    this._location.back();
  }

  previous() {}

  next() {}
}
