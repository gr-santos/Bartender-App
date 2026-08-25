import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { Order, OrderStatus } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/orders`;

  async placeOrder(cocktailId: number, patronName: string): Promise<Order> {
    return await firstValueFrom(this.http.post<Order>(this.baseUrl, { cocktailId, patronName }));
  }

  async getQueue(): Promise<Order[]> {
    return await firstValueFrom(this.http.get<Order[]>(`${this.baseUrl}/queue`));
  }

  async updateStatus(orderId: number, status: OrderStatus): Promise<Order> {
    return await firstValueFrom(this.http.patch<Order>(`${this.baseUrl}/${orderId}`, { status }));
  }
}
