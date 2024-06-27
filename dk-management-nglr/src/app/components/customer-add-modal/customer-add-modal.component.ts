import { Component } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { MaterialModule } from '../../material.module';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-add-modal',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './customer-add-modal.component.html',
  styleUrl: './customer-add-modal.component.scss'
})
export class CustomerAddModalComponent {
  customer: Customer = {
    firstname: '',
    lastname: '',
    address: '',
    email: '',
    phoneNumber: ''
  };

  constructor(
    public dialogRef: MatDialogRef<CustomerAddModalComponent>,
    private customerService: CustomerService
  ) {}

  onSave(): void {
    console.log('Saving customer:', this.customer);
    this.customerService.addCustomer(this.customer).subscribe(
      (data: Customer) => {
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
