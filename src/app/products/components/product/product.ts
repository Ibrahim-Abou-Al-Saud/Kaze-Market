import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input() prd: any = {};
  @Output() item = new EventEmitter<any>();
  isAddBtnShow: boolean = false;

  add(count: string) {
    this.item.emit({ item: this.prd, quantity: count });
    this.isAddBtnShow = !this.isAddBtnShow;
  }
}
