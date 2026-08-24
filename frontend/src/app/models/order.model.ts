import { Cocktail } from './cocktail.model';

export type OrderStatus = 'queued' | 'preparing' | 'ready_for_pickup' | 'completed';

export interface Order {
  id: number;
  cocktail: Cocktail;
  patronName: string;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}
