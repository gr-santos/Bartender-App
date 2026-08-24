import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-queue',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './queue.component.html',
  styleUrl: './queue.component.css'
})
export class QueueComponent implements OnInit {
  queue: Order[] = [];
  errorMessage = '';
  loading = true;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadQueue();
  }

  loadQueue(): void {
    this.loading = true;
    this.orderService.getQueue().subscribe({
      next: (queue) => {
        this.queue = queue;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load the order queue. Is the backend running?';
        this.loading = false;
      }
    });
  }

  markPreparing(order: Order): void {
    this.orderService.updateStatus(order.id, 'preparing').subscribe(() => this.loadQueue());
  }

  markReadyForPickup(order: Order): void {
    this.orderService.updateStatus(order.id, 'ready_for_pickup').subscribe(() => this.loadQueue());
  }

  markCompleted(order: Order): void {
    this.orderService.updateStatus(order.id, 'completed').subscribe(() => this.loadQueue());
  }
}
