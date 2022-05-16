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
  pageNum: number = 0;
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

  ngOnDestroy(): void {
    this.ingredientSub.unsubscribe();
  }
}
