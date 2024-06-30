import { Component, Inject } from '@angular/core';
import { Order } from '../../models/orders.models';
import { OrderService } from '../../services/order.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-order-edit-modal',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './order-edit-modal.component.html',
  styleUrl: './order-edit-modal.component.scss'
})

export class OrderEditModalComponent {
  editedOrder: Order;

  constructor(
    public dialogRef: MatDialogRef<OrderEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order, // Inject customer data
    private customerService: OrderService
  ) {
    // Create a copy of the customer data to avoid modifying original data prematurely
    this.editedOrder = { ...data };
  }

  onSave(): void {
    this.customerService.updateOrder(this.editedOrder).subscribe(
      (updatedOrder: Order) => this.dialogRef.close(updatedOrder),
      error => console.error('There was an error!', error)
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}