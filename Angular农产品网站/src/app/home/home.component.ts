import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  featuredProducts = [
    {
      name: '有机蔬菜礼盒',
      price: '¥128',
      image: 'assets/images/product1.jpg'
    },
    {
      name: '新鲜水果套餐',
      price: '¥98',
      image: 'assets/images/product2.jpg'
    },
    {
      name: '农家土鸡蛋',
      price: '¥68',
      image: 'assets/images/product3.jpg'
    }
  ];
}