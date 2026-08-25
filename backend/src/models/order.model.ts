import { Cocktail } from "./cocktail.model";

export type OrderStatus = "queued" | "preparing" | "ready_for_pickup" | "completed";

export class Order {
    private id: number;
    private cocktail: Cocktail;
    private patronName: string;
    private status: OrderStatus;

    constructor(id: number, cocktail: Cocktail, patronName: string) {
        this.id = id;
        this.cocktail = cocktail;
        this.patronName = patronName;
        this.status = "queued";
    }

    public getId(): number {
        return this.id;
    }
    public getCocktail(): Cocktail {
        return this.cocktail;
    }
    public getPatronName(): string {
        return this.patronName;
    }
    public getStatus(): OrderStatus {
        return this.status;
    }
    public setStatus(status: OrderStatus): void {
        this.status = status;
    }
}

export const orders: Order[] = [];
