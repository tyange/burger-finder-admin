import { Ingredient } from './../ingredient.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
})
export class IngredientComponent {
  @Input() ingredient?: Ingredient;
}
