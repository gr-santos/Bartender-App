import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';
import { OrderService } from '../../services/order.service';
import { Cocktail } from '../../models/cocktail.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  menu: Cocktail[] = [];
  patronName = '';
  selectedCocktail: Cocktail | null = null;
  confirmationMessage = '';
  errorMessage = '';
  loading = true;

  constructor(
    private cocktailService: CocktailService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.cocktailService.getMenu().subscribe({
      next: (menu) => {
        this.menu = menu;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load the cocktail menu. Is the backend running?';
        this.loading = false;
      }
    });
  }

  selectCocktail(cocktail: Cocktail): void {
    this.selectedCocktail = cocktail;
    this.confirmationMessage = '';
    this.errorMessage = '';
  }

  placeOrder(): void {
    if (!this.selectedCocktail) {
      return;
    }

    this.orderService.placeOrder(this.selectedCocktail.id, this.patronName).subscribe({
      next: (order) => {
        this.confirmationMessage = `Order #${order.id} placed for ${order.cocktail.name}! The bartender has been notified.`;
        this.selectedCocktail = null;
      },
      error: () => {
        this.errorMessage = 'Could not place your order. Please try again.';
      }
    });
  }
}
