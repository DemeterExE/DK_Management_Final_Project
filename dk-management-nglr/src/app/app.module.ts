import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CustomerService } from './services/customer.service';
import { OrderService } from './services/order.service';
import { CommonModule, NgFor } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { CustomerAddModalComponent } from './components/customer-add-modal/customer-add-modal.component';

@NgModule({
  declarations: [
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    NgFor,
    MaterialModule,
    FormsModule
  ],
  providers: [
    CustomerService,
    OrderService
  ],
  bootstrap: []
})
export class AppModule { }

