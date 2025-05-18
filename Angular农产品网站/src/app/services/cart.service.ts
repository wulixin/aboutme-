import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor() {}

  addToCart(product: any) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentItems.push({
        id: product.id,
        name: product.name,
        price: parseFloat(product.price.replace('¥', '')),
        quantity: 1,
        image: product.image
      });
    }
    
    this.cartItems.next([...currentItems]);
  }

  removeFromCart(productId: number) {
    const currentItems = this.cartItems.value.filter(item => item.id !== productId);
    this.cartItems.next(currentItems);
  }

  updateQuantity(productId: number, quantity: number) {
    const currentItems = this.cartItems.value;
    const item = currentItems.find(item => item.id === productId);
    
    if (item) {
      item.quantity = quantity;
      this.cartItems.next([...currentItems]);
    }
  }

  getTotal() {
    return this.cartItems.value.reduce(
      (sum, item) => sum + (item.price * item.quantity), 0
    );
  }

  clearCart() {
    this.cartItems.next([]);
  }
}