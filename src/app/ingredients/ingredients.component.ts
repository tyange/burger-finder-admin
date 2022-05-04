import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from './ingredient.model';
import { IngredientsService } from './ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent implements OnInit, OnDestroy {
  ingredients?: Ingredient[] = [];
  isLoading: boolean = false;

  private ingredientSub!: Subscription;

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.ingredientsService.getIngredients();
    this.ingredientSub = this.ingredientsService
      .getIngredientsUpdateListener()
      .subscribe((ingredientsData) => {
        this.isLoading = false;
        this.ingredients = ingredientsData.ingredients;
      });
  }

  ngOnDestroy(): void {
    this.ingredientSub.unsubscribe();
  }
}
