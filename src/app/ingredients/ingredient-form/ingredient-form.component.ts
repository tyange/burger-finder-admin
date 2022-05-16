import { Ingredient } from './../ingredient.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css'],
})
export class IngredientForm {
  @Input() isEditing?: boolean;
  @Input() editingIngredient?: Ingredient;
  @Output() reload = new EventEmitter();

  enteredName?: string;
  selectedKind: string = 'bread';

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit(): void {
    if (this.editingIngredient) {
      this.enteredName = this.editingIngredient.name;
      this.selectedKind = this.editingIngredient.kind;
    }
  }

  submitHandler() {
    this.reload.emit();
    this.ingredientsService.addIngredient(
      this.enteredName!,
      this.selectedKind!
    );
  }

  saveIngredient(name: string, kind: string) {
    console.log(kind);

    const editedIngredient = {
      ...this.editingIngredient!,
      name,
      kind,
    };

    this.ingredientsService.editIngredient(editedIngredient);
  }

  cancelEditing() {
    this.isEditing = false;
  }
}
