import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ingredient } from './../ingredient.model';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-edit-ingredient',
  templateUrl: './edit-ingredient.component.html',
  styleUrls: ['./edit-ingredient.component.css'],
})
export class EditIngredientComponent implements OnInit {
  id?: string;
  ingredient?: Ingredient;

  constructor(
    private route: ActivatedRoute,
    private ingredientService: IngredientsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.ingredientService.getIngredient(this.id).subscribe((data) => {
      console.log(data);
      this.ingredient = data;
    });
  }
}
