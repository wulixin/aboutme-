import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: '首页' },
  { path: 'products', component: ProductsComponent, title: '产品' },
  { path: 'cart', component: CartComponent, title: '购物车' },
  { path: 'about', component: AboutComponent, title: '关于我们' },
  { path: 'contact', component: ContactComponent, title: '联系我们' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }