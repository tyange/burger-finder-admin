import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent implements OnInit {
  ingredients?: Ingredient[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.renewIngredients();
  }

  renewIngredients() {
    this.http
      .get<{ [index: string]: Ingredient }>('http://localhost:4000/ingredients')
      .subscribe((res) => {
        for (let index in res) {
          console.log(res[index]);
          this.ingredients?.push(res[index]);
        }
      });
  }

  logging() {
    console.log(this.ingredients);
  }
}
