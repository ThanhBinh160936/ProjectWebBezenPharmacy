import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpswComponent } from './forgotpassword/resetpsw/resetpsw.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupOTPComponent } from '../app/signup/signup-otp/signup-otp.component';
import { HomeComponent } from './home/home.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { PaymentBankingComponent } from './payment-banking/payment-banking.component';
import { PaymentMomoComponent } from './payment-momo/payment-momo.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"shopping-cart", component:ShoppingcartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[

]
