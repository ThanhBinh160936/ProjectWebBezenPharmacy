import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminCaterogyManagementComponent } from './admin-caterogy-management/admin-caterogy-management.component';
import { AdminCustonerManagementComponent } from './admin-customer/admin-custoner-management/admin-custoner-management.component';
import { AdminMessengerComponent } from './admin-messenger/admin-messenger.component';
import { AdminOrderManagementComponent } from './admin-order/admin-order-management/admin-order-management.component';
import { AdminOrderDertailManagementComponent } from './admin-order/admin-order-dertail-management/admin-order-dertail-management.component';
import { AdminUncompleteOrderManagementComponent } from './admin-order/admin-uncomplete-order-management/admin-uncomplete-order-management.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NavigateBarComponent } from './navigate-bar/navigate-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminCaterogyManagementComponent,
    AdminCustonerManagementComponent,
    AdminMessengerComponent,
    AdminOrderManagementComponent,
    AdminLoginComponent,
    NavigateBarComponent,
    AdminUncompleteOrderManagementComponent,
    AdminOrderDertailManagementComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
