import express from "express";
import cors from "cors";
import cocktailRoutes from "./routes/cocktail.routes";
import orderRoutes from "./routes/order.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/cocktails", cocktailRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Bartender backend listening on http://localhost:${PORT}`);
});
