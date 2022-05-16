import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Ingredient } from './../ingredient.model';
import { IngredientsService } from './../ingredients.service';

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.css'],
})
export class IngredientDetailComponent implements OnInit {
  id?: string;
  ingredient?: Ingredient;
  icon?: IconDefinition;
  isEditing = false;

  constructor(
    private route: ActivatedRoute,
    private ingredientsService: IngredientsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.ingredientsService
      .getIngredient(this.id)
      .subscribe((data) => (this.ingredient = data));
  }

  editing() {
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
  }

  deleteIngredient() {}
}
