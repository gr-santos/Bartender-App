import { Request, Response } from "express";
import { menu } from "../models/cocktail.model";
import { Order, OrderStatus, orders } from "../models/order.model";

export function createOrder(req: Request, res: Response) {
    if (!req.body.cocktailId) {
        return res.status(400).json({ error: "cocktailId is required" });
    }

    const cocktailId = Number(req.body.cocktailId);
    const patronName = req.body.patronName || "Guest";

    const cocktail = menu.find(c => c.getId() === cocktailId);
    if (!cocktail) {
        return res.status(404).json({ error: "Cocktail not found" });
    }

    const order = new Order(orders.length + 1, cocktail, patronName);
    orders.push(order);
    res.status(201).json(order);
}

export function viewQueue(req: Request, res: Response) {
    const queue = orders.filter(order => order.getStatus() !== "completed");
    res.json(queue);
}

export function editOrderStatus(req: Request, res: Response) {
    const id = Number(req.params.id);
    const status = req.body.status;

    if (status !== "queued" && status !== "preparing" && status !== "ready_for_pickup" && status !== "completed") {
        return res.status(400).json({ error: "Invalid status" });
    }

    const order = orders.find(order => order.getId() === id);
    if (!order) {
        return res.status(404).json({ error: "Order not found" });
    }

    order.setStatus(status as OrderStatus);
    res.json(order);
}
