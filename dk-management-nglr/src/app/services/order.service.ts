import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://127.0.0.1:8000/api/orders/';

  constructor(private http: HttpClient) {}

  // GET all orders
  getOrders(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // GET order by id
  getOrderById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}/`);
  }

  // POST a new order
  createOrder(orderData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, orderData);
  }

  // PUT update an existing order
  updateOrder(id: number, orderData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${id}/`, orderData);
  }

  // DELETE an order
  deleteOrder(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}/`);
  }
}
