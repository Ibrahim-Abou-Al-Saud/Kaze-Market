import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  cartProducts: any[] = [];
  total: number = 0;
  ngOnInit(): void {
    this.getCartProducts();
  }
  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getTotal();
  }

  getTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }

  plusAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  minusAmount(index: number) {
    if (this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--;
      this.getTotal();
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.getTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  clearCart() {
    localStorage.clear();
    this.cartProducts = [];
    this.total = 0;
  }
}
