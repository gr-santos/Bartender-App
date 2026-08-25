import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';
import { OrderService } from '../../services/order.service';
import { Cocktail } from '../../models/cocktail.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  cocktailSvc = inject(CocktailService);
  orderSvc = inject(OrderService);

  menu: Cocktail[] = [];
  patronName = '';
  selectedCocktail: Cocktail | null = null;
  confirmationMessage = '';
  errorMessage = '';
  loading = true;

  constructor() {
    this.loadMenu();
  }

  async loadMenu() {
    this.loading = true;
    try {
      this.menu = await this.cocktailSvc.getMenu();
    } catch (error) {
      this.errorMessage = 'Could not load the cocktail menu. Is the backend running?';
    }
    this.loading = false;
  }

  selectCocktail(cocktail: Cocktail) {
    this.selectedCocktail = cocktail;
    this.confirmationMessage = '';
    this.errorMessage = '';
  }

  async placeOrder() {
    if (!this.selectedCocktail) {
      return;
    }

    try {
      const order = await this.orderSvc.placeOrder(this.selectedCocktail.id, this.patronName);
      this.confirmationMessage = `Order #${order.id} placed for ${order.cocktail.name}! The bartender has been notified.`;
      this.selectedCocktail = null;
    } catch (error) {
      this.errorMessage = 'Could not place your order. Please try again.';
    }
  }
}
