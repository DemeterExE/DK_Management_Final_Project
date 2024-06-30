import { Component, Inject } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { MaterialModule } from '../../material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-delete-modal',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './customer-delete-modal.component.html',
  styleUrl: './customer-delete-modal.component.scss'
})
export class CustomerDeleteModalComponent {
  constructor(
    public dialogRef: MatDialogRef<CustomerDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private customerService: CustomerService
  ) {}

  onDelete(): void {
    this.customerService.deleteCustomer(this.data.id).subscribe(
      () => this.dialogRef.close(true),
      error => console.error('There was an error!', error)
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
