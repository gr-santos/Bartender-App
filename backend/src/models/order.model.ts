import { Cocktail, CocktailModel } from "./cocktail.model";

export type OrderStatus = "queued" | "preparing" | "ready_for_pickup" | "completed";

export interface Order {
  id: number;
  cocktail: Cocktail;
  patronName: string;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * In-memory order queue acting as the "database" of placed orders.
 */
const orders: Order[] = [];
let nextOrderId = 1;

export class OrderModel {
  static placeOrder(cocktailId: number, patronName: string): Order | null {
    const cocktail = CocktailModel.findById(cocktailId);
    if (!cocktail) {
      return null;
    }

    const order: Order = {
      id: nextOrderId++,
      cocktail,
      patronName: patronName?.trim() || "Guest",
      status: "queued",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    orders.push(order);
    return order;
  }

  static getQueue(): Order[] {
    // Bartenders care about everything not yet completed, oldest first.
    return orders
      .filter((o) => o.status !== "completed")
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }

  static getAll(): Order[] {
    return orders;
  }

  static findById(id: number): Order | undefined {
    return orders.find((o) => o.id === id);
  }

  static updateStatus(id: number, status: OrderStatus): Order | null {
    const order = this.findById(id);
    if (!order) {
      return null;
    }
    order.status = status;
    order.updatedAt = new Date();
    return order;
  }
}
