import { Component, NgModule, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { MaterialModule } from '../../material.module';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDeleteModalComponent } from '../customer-delete-modal/customer-delete-modal.component';
import { CustomerEditModalComponent } from '../customer-edit-modal/customer-edit-modal.component';
import { CustomerAddModalComponent } from '../customer-add-modal/customer-add-modal.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [MaterialModule, NgFor],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(
      (data: Customer[]) => {
        this.customers = data;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  openEditDialog(customer: Customer): void {
    const dialogRef = this.dialog.open(CustomerEditModalComponent, {
      width: '450px',
      data: { ...customer }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getCustomers();
      }
    });
  }

  openDeleteDialog(id?: number): void {
    if (id !== undefined) {
      const dialogRef = this.dialog.open(CustomerDeleteModalComponent, {
        width: '350px',
        data: { id }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.getCustomers();
        }
      });
    } else {
      console.error('Customer ID is undefined');
    }
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(CustomerAddModalComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customers.push(result);
      }
    });
  }
}