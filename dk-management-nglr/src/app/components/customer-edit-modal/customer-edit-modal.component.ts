import { Component, Inject } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from '../../services/customer.service';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-customer-edit-modal',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './customer-edit-modal.component.html',
})
export class CustomerEditModalComponent {
  editedCustomer: Customer;

  constructor(
    public dialogRef: MatDialogRef<CustomerEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer, // Inject customer data
    private customerService: CustomerService
  ) {
    // Create a copy of the customer data to avoid modifying original data prematurely
    this.editedCustomer = { ...data };
  }

  onSave(): void {
    this.customerService.updateCustomer(this.editedCustomer).subscribe(
      (updatedCustomer: Customer) => this.dialogRef.close(updatedCustomer),
      error => console.error('There was an error!', error)
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}