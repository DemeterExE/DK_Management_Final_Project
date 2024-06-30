import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CustomerService } from '../../services/customer.service';


@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})

export class WidgetComponent implements OnInit {
  totalOrders: number = 0;
  totalCustomers: number = 0;

  constructor(private orderService: OrderService, private customerService: CustomerService) {}

  ngOnInit(): void {
    this.fetchTotalOrders();
    this.fetchTotalCustomers();
  }

  fetchTotalOrders(): void {
    this.orderService.getTotalOrders().subscribe(data => {
      this.totalOrders = data.total;
    });
  }

  fetchTotalCustomers(): void {
    this.customerService.getTotalCustomers().subscribe(data => {
      this.totalCustomers = data.total;
    });
  }
}