import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerService } from './services/customer.service';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    CustomersComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CustomerService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
