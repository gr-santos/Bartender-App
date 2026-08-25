import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cocktail } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/cocktails`;

  async getMenu(): Promise<Cocktail[]> {
    return await firstValueFrom(this.http.get<Cocktail[]>(this.baseUrl));
  }
}
