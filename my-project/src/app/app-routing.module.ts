import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InforComponent } from './infor/infor.component';
import { PolicydeliveryComponent } from './infor/policydelivery/policydelivery.component';
import { PolicypaymentComponent } from './infor/policypayment/policypayment.component';
import { PolicysecurityComponent } from './infor/policysecurity/policysecurity.component';
import { PolicywarrantyComponent } from './infor/policywarranty/policywarranty.component';
import { MemberpointComponent } from './infor/memberpoint/memberpoint.component';
import { OverviewComponent } from './infor/overview/overview.component';
import { InstructionComponent } from './infor/instruction/instruction.component';

const routes: Routes = [
  {path:'app-overview',component:OverviewComponent},
  {path:'app-instruction',component:InstructionComponent},
  {path:'app-memberpoint',component:MemberpointComponent},
  {path:'app-policydelivery',component:PolicydeliveryComponent},
  {path:'app-policypayment',component:PolicypaymentComponent},
  {path:'app-policysecurity',component:PolicysecurityComponent},
  {path:'app-policywarranty',component:PolicywarrantyComponent},

];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[
  InforComponent,
  PolicydeliveryComponent,
  PolicypaymentComponent,
  PolicysecurityComponent,
  PolicywarrantyComponent,
  MemberpointComponent,
  OverviewComponent,
  InstructionComponent
  
]