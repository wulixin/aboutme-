import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  categories = ['全部', '蔬菜', '水果', '禽蛋', '谷物'];
  selectedCategory = '全部';
  
  products = [
    {
      id: 1,
      name: '有机西红柿',
      price: '¥12.8/500g',
      priceValue: 12.8,
      category: '蔬菜',
      description: '自然成熟，酸甜可口',
      image: 'assets/images/products/tomato.jpg'
    },
    {
      id: 2,
      name: '红富士苹果',
      price: '¥15.8/500g',
      priceValue: 15.8,
      category: '水果',
      description: '脆甜多汁，产地直供',
      image: 'assets/images/products/apple.jpg'
    },
    {
      id: 3,
      name: '农家土鸡蛋',
      price: '¥28/盒',
      priceValue: 28,
      category: '禽蛋',
      description: '散养土鸡，营养丰富',
      image: 'assets/images/products/egg.jpg'
    },
    {
      id: 4,
      name: '有机大米',
      price: '¥68/5kg',
      priceValue: 68,
      category: '谷物',
      description: '无农药残留，米香浓郁',
      image: 'assets/images/products/rice.jpg'
    },
    {
      id: 5,
      name: '新鲜菠菜',
      price: '¥8.5/500g',
      priceValue: 8.5,
      category: '蔬菜',
      description: '现摘现发，营养丰富',
      image: 'assets/images/products/spinach.jpg'
    },
    {
      id: 6,
      name: '阳光玫瑰葡萄',
      price: '¥32.8/500g',
      priceValue: 32.8,
      category: '水果',
      description: '果粒饱满，甜度高',
      image: 'assets/images/products/grape.jpg'
    }
  ];

  filteredProducts = this.products;
  addedToCart = false;
  addedProductName = '';

  constructor(private cartService: CartService) {}

  filterProducts(category: string) {
    this.selectedCategory = category;
    this.filteredProducts = category === '全部' 
      ? this.products 
      : this.products.filter(p => p.category === category);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.addedToCart = true;
    this.addedProductName = product.name;
    
    setTimeout(() => {
      this.addedToCart = false;
    }, 3000);
  }
}