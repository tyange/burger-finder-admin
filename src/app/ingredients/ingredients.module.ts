import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import { ListContainerComponent } from '../list-container/list-container.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientDetailComponent } from './ingredient-detail/ingredient-detail.component';
import { IngredientIconComponent } from './ingredient-icon/ingredient-icon.component';
import { IngredientForm } from './ingredient-form/ingredient-form.component';
import { EditIngredientComponent } from './edit-ingredient/edit-ingredient.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';

@NgModule({
  declarations: [
    IngredientComponent,
    IngredientForm,
    IngredientIconComponent,
    IngredientDetailComponent,
    ListContainerComponent,
    IngredientListComponent,
    EditIngredientComponent,
  ],
  imports: [CommonModule, FormsModule, FontAwesomeModule, RouterModule],
})
export class IngredientsModule {}
