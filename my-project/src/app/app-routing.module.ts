import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { PaymentBankingComponent } from './payment-banking/payment-banking.component';
import { PaymentMomoComponent } from './payment-momo/payment-momo.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"shopping-cart", component:ShoppingcartComponent},
  {path:"payment-banking", component:PaymentBankingComponent},
  {path:"payment-momo", component:PaymentMomoComponent},
  {path:"payment-member", component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[

]
