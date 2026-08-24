import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Cocktail } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private readonly baseUrl = `${environment.apiUrl}/cocktails`;

  constructor(private http: HttpClient) {}

  getMenu(): Observable<Cocktail[]> {
    return this.http
      .get<{ menu: Cocktail[] }>(this.baseUrl)
      .pipe(map((res) => res.menu));
  }
}
