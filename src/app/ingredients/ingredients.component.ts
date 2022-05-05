import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from './ingredient.model';
import { IngredientsService } from './ingredients.service';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent implements OnInit, OnDestroy {
  ingredients?: Ingredient[] = [];
  isInit: boolean = false;
  isLoading: boolean = false;
  isError: boolean = false;

  // fontawesome
  faSpinner = faSpinner;

  private ingredientSub!: Subscription;

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.ingredientsService.getIngredients();
    this.ingredientSub = this.ingredientsService
      .getIngredientsUpdateListener()
      .subscribe({
        next: (ingredientsData: { ingredients: Ingredient[] }) => {
          this.isLoading = false;
          this.ingredients = ingredientsData.ingredients;
        },
      });
  }

  loadingHandler() {
    this.isLoading = true;
  }

  retryHandler() {
    this.ingredientsService.getIngredients();
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.ingredientSub.unsubscribe();
  }
}
