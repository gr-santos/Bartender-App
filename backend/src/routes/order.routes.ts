import { Router } from "express";
import { createOrder, viewQueue, editOrderStatus } from "../controllers/order.controller";

const router = Router();

router.post("/", createOrder);
router.get("/queue", viewQueue);
router.patch("/:id", editOrderStatus);

export default router;
