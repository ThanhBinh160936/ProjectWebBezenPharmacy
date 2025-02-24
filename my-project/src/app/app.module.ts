import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { InforComponent } from './infor/infor.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentMomoComponent } from './payment-momo/payment-momo.component';
import { PaymentBankingComponent } from './payment-banking/payment-banking.component';
import { FormsModule } from '@angular/forms';
import { PolicywarrantyComponent } from './infor/policywarranty/policywarranty.component';
import { OverviewComponent } from './infor/overview/overview.component';
import { InstructionComponent } from './infor/instruction/instruction.component';
import { PolicydeliveryComponent } from './infor/policydelivery/policydelivery.component';
import { PolicypaymentComponent } from './infor/policypayment/policypayment.component';
import { PolicysecurityComponent } from './infor/policysecurity/policysecurity.component';
import { MemberpointComponent } from './infor/memberpoint/memberpoint.component';
import { SignupOTPComponent } from './signup/signup-otp/signup-otp.component';
import { ResetpswComponent } from './forgotpassword/resetpsw/resetpsw.component';
import { ChangePswComponent } from './profile/change-psw/change-psw.component';
import { OrderhistoryComponent } from './profile/orderhistory/orderhistory.component';

@NgModule({
  declarations: [
  AppComponent,
    RoutingComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    ProfileComponent,
    OrderdetailComponent,
    ChatboxComponent,
    InforComponent,
    HomeComponent,
    CategoryComponent,
    ProductdetailComponent,
    ShoppingcartComponent,
    PaymentComponent,
    PaymentMomoComponent,
    PaymentBankingComponent,
    PolicywarrantyComponent,
    OverviewComponent,
    InstructionComponent,
    PolicydeliveryComponent,
    PolicypaymentComponent,
    PolicysecurityComponent,
    MemberpointComponent,
    SignupOTPComponent,
    ResetpswComponent,
    ChangePswComponent,
    OrderhistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
