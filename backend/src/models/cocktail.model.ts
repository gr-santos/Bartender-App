export interface Cocktail {
  id: number;
  name: string;
  description: string;
  price: number;
  ingredients: string[];
}

/**
 * In-memory "database" of the cocktail menu.
 * Swap this for a real DB (e.g. SQLite/Postgres) without touching the controller.
 */
const menu: Cocktail[] = [
  {
    id: 1,
    name: "Mojito",
    description: "White rum, lime, mint, sugar, soda water",
    price: 9.5,
    ingredients: ["White rum", "Lime", "Mint", "Sugar", "Soda water"],
  },
  {
    id: 2,
    name: "Margarita",
    description: "Tequila, triple sec, lime juice, salted rim",
    price: 10.0,
    ingredients: ["Tequila", "Triple sec", "Lime juice", "Salt"],
  },
  {
    id: 3,
    name: "Old Fashioned",
    description: "Bourbon, sugar, Angostura bitters, orange peel",
    price: 11.0,
    ingredients: ["Bourbon", "Sugar", "Angostura bitters", "Orange peel"],
  },
  {
    id: 4,
    name: "Cosmopolitan",
    description: "Vodka, triple sec, cranberry juice, lime juice",
    price: 10.5,
    ingredients: ["Vodka", "Triple sec", "Cranberry juice", "Lime juice"],
  },
  {
    id: 5,
    name: "Pina Colada",
    description: "White rum, coconut cream, pineapple juice",
    price: 9.0,
    ingredients: ["White rum", "Coconut cream", "Pineapple juice"],
  },
];

export class CocktailModel {
  static getMenu(): Cocktail[] {
    return menu;
  }

  static findById(id: number): Cocktail | undefined {
    return menu.find((c) => c.id === id);
  }
}
