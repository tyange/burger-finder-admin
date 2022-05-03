import { Ingredient } from './../ingredient.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
})
export class IngredientComponent implements OnInit {
  @Input() ingredient?: Ingredient;

  ngOnInit(): void {
    console.log(this.ingredient);
  }
}
