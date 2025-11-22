import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  cartProducts: any[] = [];
  total: number = 0;
  sum: number = 0;
  success: boolean = false;
  constructor(private cartsService: CartsService) {}

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
    this.sum = +this.total.toFixed(3) + 5;
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
    this.getTotal();
  }

  detectCahnges() {
    this.getTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  addCart() {
    let products = this.cartProducts.map((item) => {
      return { prdId: item.item.id, quantity: item.quantity };
    });
    let model = {
      id: 0,
      userId: 5,
      products: products,
    };
    this.cartsService.createNewCart(model).subscribe((res) => {
      this.success = true;
    });
  }
}
