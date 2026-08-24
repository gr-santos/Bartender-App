import { Request, Response } from "express";
import { OrderModel, OrderStatus } from "../models/order.model";

const VALID_STATUSES: OrderStatus[] = ["queued", "preparing", "ready_for_pickup", "completed"];

/**
 * Handles order-related actions: create (patron places an order),
 * view (bartender's order queue), and edit (bartender updates status).
 */
export class OrderController {
  static createOrder(req: Request, res: Response): void {
    const { cocktailId, patronName } = req.body ?? {};

    const id = Number(cocktailId);
    if (!id || Number.isNaN(id)) {
      res.status(400).json({ error: "cocktailId is required" });
      return;
    }

    const order = OrderModel.placeOrder(id, patronName);
    if (!order) {
      res.status(404).json({ error: `No cocktail found with id ${id}` });
      return;
    }

    res.status(201).json({ order });
  }

  static viewQueue(_req: Request, res: Response): void {
    const queue = OrderModel.getQueue();
    res.status(200).json({ queue });
  }

  static editOrderStatus(req: Request, res: Response): void {
    const id = Number(req.params.id);
    const { status } = req.body ?? {};

    if (!VALID_STATUSES.includes(status)) {
      res.status(400).json({ error: `status must be one of: ${VALID_STATUSES.join(", ")}` });
      return;
    }

    const order = OrderModel.updateStatus(id, status);
    if (!order) {
      res.status(404).json({ error: `No order found with id ${id}` });
      return;
    }

    res.status(200).json({ order });
  }
}
