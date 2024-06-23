import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgFor],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe(
      (data: any) => {
        this.orders = data;
      },
      error => {
        console.error('Error loading orders:', error);
      }
    );
  }

  deleteOrder(id: number): void {
    this.orderService.deleteOrder(id).subscribe(
      () => {
        // Reload orders after successful delete
        this.loadOrders();
      },
      error => {
        console.error('Error deleting order:', error);
      }
    );
  }
}
