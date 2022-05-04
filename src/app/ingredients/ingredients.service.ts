import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { Ingredient } from './ingredient.model';

@Injectable({ providedIn: 'root' })
export class IngredientsService {
  private ingredients: Ingredient[] = [];
  private ingredientsUpdated = new Subject<{ ingredients: Ingredient[] }>();

  constructor(private http: HttpClient, private router: Router) {}

  getIngredients() {
    this.http
      .get<{ [key: string]: Ingredient }>('http://localhost:4000/ingredients')
      .subscribe({
        next: (res) => {
          const ingredientsData = [];
          for (let index in res) {
            ingredientsData.push(res[index]);
          }
          this.ingredients = ingredientsData;
          this.ingredientsUpdated.next({
            ingredients: [...this.ingredients],
          });
        },
        error: (e) => console.log(e),
      });
  }

  getIngredientsUpdateListener() {
    return this.ingredientsUpdated;
  }

  addIngredient(name: string, kind: string) {
    const newIngredient = {
      name,
      kind,
      amount: 0,
    };

    this.http
      .post('http://localhost:4000/ingredients', newIngredient)
      .subscribe((responseData) => {
        this.getIngredients();
      });
  }
}
