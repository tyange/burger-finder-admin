import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Ingredient } from './ingredient.model';

@Injectable({ providedIn: 'root' })
export class IngredientsService {
  private ingredientsSeparatePage: Array<Ingredient[]> = [];
  private ingredientsUpdated = new Subject<{
    ingredients: Array<Ingredient[]>;
  }>();

  constructor(private http: HttpClient, private router: Router) {}

  getIngredients() {
    this.http
      .get<{ [key: string]: Ingredient }>('http://localhost:4000/ingredients')
      .pipe(
        map((res) => {
          const ingredientsDataArr = [];
          for (let index in res) {
            ingredientsDataArr.push(res[index]);
          }

          const perPage = 10;
          const ingredientsData = ingredientsDataArr.reduce(
            (result: any, item, index) => {
              const pageIndex = Math.floor(index / perPage);

              if (!result[pageIndex]) {
                result[pageIndex] = [];
              }

              result[pageIndex].push(item);

              return result;
            },
            []
          );

          return ingredientsData;
        })
      )
      .subscribe({
        next: (data) => {
          this.ingredientsSeparatePage = data;
          this.ingredientsUpdated.next({
            ingredients: [...this.ingredientsSeparatePage],
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
