import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-queue',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './queue.component.html',
  styleUrl: './queue.component.css'
})
export class QueueComponent {
  orderSvc = inject(OrderService);

  queue: Order[] = [];
  errorMessage = '';
  loading = true;

  constructor() {
    this.loadQueue();
  }

  async loadQueue() {
    this.loading = true;
    this.errorMessage = '';
    try {
      this.queue = await this.orderSvc.getQueue();
    } catch (error) {
      this.errorMessage = 'Could not load the order queue. Is the backend running?';
    }
    this.loading = false;
  }

  async markPreparing(order: Order) {
    await this.orderSvc.updateStatus(order.id, 'preparing');
    this.loadQueue();
  }

  async markReadyForPickup(order: Order) {
    await this.orderSvc.updateStatus(order.id, 'ready_for_pickup');
    this.loadQueue();
  }

  async markCompleted(order: Order) {
    await this.orderSvc.updateStatus(order.id, 'completed');
    this.loadQueue();
  }
}
