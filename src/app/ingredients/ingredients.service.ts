import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Ingredient } from './ingredient.model';

@Injectable({ providedIn: 'root' })
export class IngredientsService {
  private ingredientsSeparatePage: Array<Ingredient[]> = [];
  private ingredientsUpdated = new Subject<{
    ingredients: Array<Ingredient[]>;
  }>();

  constructor(private http: HttpClient, private router: Router) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }

    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getIngredients() {
    this.http
      .get<{ [key: string]: Ingredient }>('http://localhost:4000/ingredients')
      .pipe(
        map((res) => {
          console.log(res);

          const ingredientsDataArr = [];
          for (let index in res) {
            ingredientsDataArr.push(res[index]);
          }

          const perPage = 16;
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

          console.log(ingredientsData);

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
        error: (err) => console.log(err),
      });
  }

  getIngredientsUpdateListener() {
    return this.ingredientsUpdated;
  }

  getIngredient(ingredientId: string) {
    return this.http.get<Ingredient>(
      `http://localhost:4000/ingredients/${ingredientId}`
    );
  }

  addIngredient(name: string, kind: string) {
    const newIngredient = {
      name,
      kind,
      amount: 0,
    };

    this.http
      .post('http://localhost:4000/ingredients', newIngredient)
      .subscribe((_) => {
        this.getIngredients();
      });
  }

  editIngredient(ingredient: Ingredient) {
    this.http
      .put(`http://localhost:4000/ingredients/${ingredient.id}`, ingredient)
      .pipe(catchError(this.handleError))
      .subscribe((response) => {
        console.log(response);
        this.router.navigate([`/ingredients/${ingredient.id}`]);
      });
  }
}
