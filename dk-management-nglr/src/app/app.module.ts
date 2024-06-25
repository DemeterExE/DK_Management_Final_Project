import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CustomerService } from './services/customer.service';
import { OrderService } from './services/order.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    CustomerService,
    OrderService
  ],
  bootstrap: []
})
export class AppModule { }

