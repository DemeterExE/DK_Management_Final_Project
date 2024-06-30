import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CustomerService } from './services/customer.service';
import { OrderService } from './services/order.service';
import { CommonModule, NgFor } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerAddModalComponent } from './components/customer-add-modal/customer-add-modal.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgFor,
    MaterialModule,
    FormsModule
  ],
  providers: [
    CustomerService,
    OrderService,
    CustomerAddModalComponent
  ],
  bootstrap: []
})
export class AppModule { }

