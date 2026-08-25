export class Cocktail {
    private id: number;
    private name: string;
    private game: string;
    private description: string;
    private price: number;
    private ingredients: string[];

    constructor(id: number, name: string, game: string, description: string, price: number, ingredients: string[]) {
        this.id = id;
        this.name = name;
        this.game = game;
        this.description = description;
        this.price = price;
        this.ingredients = ingredients;
    }

    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getGame(): string {
        return this.game;
    }
    public getDescription(): string {
        return this.description;
    }
    public getPrice(): number {
        return this.price;
    }
    public getIngredients(): string[] {
        return this.ingredients;
    }
}

export const menu: Cocktail[] = [
    new Cocktail(1, "Verdansk Victory Mojito", "Call of Duty: Warzone", "White rum, lime, mint, sugar, soda water", 9.5, ["White rum", "Lime", "Mint", "Sugar", "Soda water"]),
    new Cocktail(2, "Headshot Margarita", "Valorant", "Tequila, triple sec, lime juice, salted rim", 10.0, ["Tequila", "Triple sec", "Lime juice", "Salt"]),
    new Cocktail(3, "Elden Ring Old Fashioned", "Elden Ring", "Bourbon, sugar, Angostura bitters, orange peel", 11.0, ["Bourbon", "Sugar", "Angostura bitters", "Orange peel"]),
    new Cocktail(4, "Night City Neon Cosmo", "Cyberpunk 2077", "Vodka, triple sec, cranberry juice, splash of blue curacao", 10.5, ["Vodka", "Triple sec", "Cranberry juice", "Blue curacao"]),
    new Cocktail(5, "Victory Royale Colada", "Fortnite", "White rum, coconut cream, pineapple juice", 9.0, ["White rum", "Coconut cream", "Pineapple juice"]),
    new Cocktail(6, "Creeper's Revenge", "Minecraft", "Vodka, melon liqueur, lime, soda water", 10.0, ["Vodka", "Melon liqueur", "Lime", "Soda water"]),
    new Cocktail(7, "Arc Raiders Wasteland Mule", "Arc Raiders", "Vodka, ginger beer, lime, blackberry", 10.5, ["Vodka", "Ginger beer", "Lime", "Blackberry"]),
];
