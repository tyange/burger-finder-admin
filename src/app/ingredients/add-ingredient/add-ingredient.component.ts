import { Component } from '@angular/core';

import { IngredientsService } from './../ingredients.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css'],
})
export class AddIngredientComponent {
  enteredName?: string;
  selectedKind?: string = 'bread';

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit(): void {}

  submitHandler() {
    this.ingredientsService.addIngredient(
      this.enteredName!,
      this.selectedKind!
    );
  }
}
