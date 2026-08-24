# Bartender-App
MVC Bartender App

CIS 4327 – IS Senior Project I individual activity: an MVC application where bar patrons view a cocktail menu and place orders, and bartenders view/manage the order queue.

## Architecture

- **Model + Controller** — `backend/` (Node.js + Express + TypeScript)
  - `src/models` — cocktail menu and order data/logic
  - `src/controllers` — handles GET/POST requests for menu and orders
  - `src/routes` — Express route definitions
- **View** — `frontend/` (Angular)
  - `pages/home` — index page (choose Patron or Bartender)
  - `pages/menu` — patron view: browse menu, place an order
  - `pages/queue` — bartender view: order queue, update order status

## Request flow

1. Index page lets a user pick "Patron" (menu) or "Bartender" (queue).
2. Angular calls the Express API (controller) via HTTP GET/POST.
3. The controller asks the model for data (menu or orders) and returns JSON.
4. Angular views render that data (`menu.component`, `queue.component`).
5. Placing an order sends a POST that the controller passes to the model to store; the bartender's queue view reflects it on next load.
6. The bartender marks an order "preparing" → "ready for pickup" → "completed" via PATCH requests handled the same way.

## Running locally

Backend:
```bash
cd backend
npm install
npm run build
npm start
```
Runs on http://localhost:3000 (`/api/cocktails`, `/api/orders`, `/api/orders/queue`).

Frontend:
```bash
cd frontend
npm install
npm start
```
Runs on http://localhost:4200 and talks to the backend via `environment.apiUrl`.
