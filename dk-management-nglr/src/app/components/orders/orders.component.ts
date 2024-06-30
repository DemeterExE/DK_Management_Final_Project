import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { NgFor } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../material.module';
import { Order } from '../../models/orders.models';
import { OrderEditModalComponent } from '../order-edit-modal/order-edit-modal.component';
import { OrderDeleteModalComponent } from '../order-delete-modal/order-delete-modal.component';
import { OrderAddModalComponent } from '../order-add-modal/order-add-modal.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MaterialModule, NgFor],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe(
      (data: Order[]) => {
        this.orders = data;
      },
      error => {
        console.error('Error loading orders:', error);
      }
    );
  }

  openEditDialog(order: Order): void {
    const dialogRef = this.dialog.open(OrderEditModalComponent, {
      width: '450px',
      data: { ...order }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getOrders();
      }
    });
  }

  openDeleteDialog(id?: number): void {
    if (id !== undefined) {
      const dialogRef = this.dialog.open(OrderDeleteModalComponent, {
        width: '350px',
        data: { id }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.getOrders();
        }
      });
    } else {
      console.error('Customer ID is undefined');
    }
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(OrderAddModalComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.orders.push(result);
      }
    });
  }
}
