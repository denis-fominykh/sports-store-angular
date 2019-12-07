import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'store', component: StoreComponent },
    { path: 'cart', component: CartDetailComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: '**', redirectTo: '/store' }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
