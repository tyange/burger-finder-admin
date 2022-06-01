import { Component } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Ingredient } from '../ingredient.model';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'],
})
export class IngredientListComponent {
  ingredients?: Array<Ingredient[]> = [];
  currentPageNum = 0;
  isInit = false;
  isLoading = false;
  isError = false;

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
        next: (ingredientsData: { ingredients: Array<Ingredient[]> }) => {
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

  paginationHandler(num: number) {
    this.currentPageNum = num;
  }

  ngOnDestroy(): void {
    this.ingredientSub.unsubscribe();
  }
}
