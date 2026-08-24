import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Order, OrderStatus } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly baseUrl = `${environment.apiUrl}/orders`;

  constructor(private http: HttpClient) {}

  placeOrder(cocktailId: number, patronName: string): Observable<Order> {
    return this.http
      .post<{ order: Order }>(this.baseUrl, { cocktailId, patronName })
      .pipe(map((res) => res.order));
  }

  getQueue(): Observable<Order[]> {
    return this.http
      .get<{ queue: Order[] }>(`${this.baseUrl}/queue`)
      .pipe(map((res) => res.queue));
  }

  updateStatus(orderId: number, status: OrderStatus): Observable<Order> {
    return this.http
      .patch<{ order: Order }>(`${this.baseUrl}/${orderId}`, { status })
      .pipe(map((res) => res.order));
  }
}
