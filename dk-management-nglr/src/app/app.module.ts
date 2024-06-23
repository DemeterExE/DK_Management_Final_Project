import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AppRoutingModule, routes } from './app-routing.module';
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

