import { Component } from '@angular/core';
import { Order } from '../../models/orders.models';
import { MatDialogRef } from '@angular/material/dialog';
import { OrderService } from '../../services/order.service';
import { MaterialModule } from '../../material.module';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-order-add-modal',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './order-add-modal.component.html',
  styleUrl: './order-add-modal.component.scss'
})

export class OrderAddModalComponent {
  order: Order = {
    customer: {
      firstname: '',
      lastname: '',
      address: '',
      email: '',
      phoneNumber: ''
    },
    status: 'pending',
    quantity: 0,
    location: '',
    date: '',
    total: 0
  };

  constructor(
    public dialogRef: MatDialogRef<OrderAddModalComponent>,
    private orderService: OrderService
  ) {}

  onSave(): void {
    this.orderService.addOrder(this.order).subscribe(
      (data: Order) => {
        console.log('Customer added successfully:', data);
        this.dialogRef.close(data);
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}