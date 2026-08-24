import { Router } from "express";
import { OrderController } from "../controllers/order.controller";

const router = Router();

// POST /api/orders - patron places a cocktail order
router.post("/", OrderController.createOrder);

// GET /api/orders/queue - bartender views the order queue
router.get("/queue", OrderController.viewQueue);

// PATCH /api/orders/:id - bartender edits an order's status (e.g. set ready for pickup)
router.patch("/:id", OrderController.editOrderStatus);

export default router;
