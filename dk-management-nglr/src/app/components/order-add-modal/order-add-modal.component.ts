import { Component } from '@angular/core';
import { Order } from '../../models/orders.models';
import { MatDialogRef } from '@angular/material/dialog';
import { OrderService } from '../../services/order.service';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-order-add-modal',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './order-add-modal.component.html',
  styleUrl: './order-add-modal.component.scss'
})

export class OrderAddModalComponent {
  order: Order = {
    customer: '',
    status: 'pending',
    quantity: 0,
    location: '',
    date: new Date().toISOString(), // Initialize with current date
    total: 0
  };

  constructor(
    public dialogRef: MatDialogRef<OrderAddModalComponent>,
    private orderService: OrderService
  ) {}

  onSave(): void {
    console.log('Order before formatting:', this.order);
  
    // Ensure quantity and total are numbers
    const formattedOrder: Order = {
      ...this.order,
      quantity: Number(this.order.quantity),
      total: Number(this.order.total),
      // Keep date as string in the desired format without altering the local time
      date: new Date(this.order.date).toISOString().split('T')[0] // "YYYY-MM-DD"
    };
  
    console.log('Order after formatting:', formattedOrder);
  
    this.orderService.addOrder(formattedOrder).subscribe(
      (data: Order) => {
        console.log('Order added successfully:', data);
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