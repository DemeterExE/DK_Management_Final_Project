import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-delete-modal',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './order-delete-modal.component.html',
  styleUrl: './order-delete-modal.component.scss'
})

export class OrderDeleteModalComponent {
  constructor(
    public dialogRef: MatDialogRef<OrderDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private orderService: OrderService
  ) {}

  onDelete(): void {
    this.orderService.deleteOrder(this.data.id).subscribe(
      () => this.dialogRef.close(true),
      error => console.error('There was an error!', error)
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
