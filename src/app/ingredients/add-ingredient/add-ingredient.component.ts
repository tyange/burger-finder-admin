import { Component, EventEmitter, Output } from '@angular/core';

import { IngredientsService } from './../ingredients.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css'],
})
export class AddIngredientComponent {
  @Output() reload = new EventEmitter();

  enteredName?: string;
  selectedKind?: string = 'bread';

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit(): void {}

  submitHandler() {
    this.reload.emit();
    this.ingredientsService.addIngredient(
      this.enteredName!,
      this.selectedKind!
    );
  }
}
