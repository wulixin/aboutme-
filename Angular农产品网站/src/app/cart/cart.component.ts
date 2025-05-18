import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  paymentMethod: string = 'wechat';
  isCheckingOut = false;

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  updateQuantity(item: any, event: any) {
    const quantity = parseInt(event.target.value);
    if (quantity > 0) {
      this.cartService.updateQuantity(item.id, quantity);
    }
  }

  removeItem(itemId: number) {
    this.cartService.removeFromCart(itemId);
  }

  checkout() {
    if (this.cartItems.length === 0) {
      alert('购物车为空，请先添加商品');
      return;
    }
    this.isCheckingOut = true;
    // 这里添加实际支付逻辑
    setTimeout(() => {
      this.isCheckingOut = false;
    }, 2000);
  }

  getTotal() {
    return this.cartService.getTotal();
  }
}