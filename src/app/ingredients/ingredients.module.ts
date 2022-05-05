import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListContainerComponent } from '../list-container/list-container.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientsComponent } from './ingredients.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AddIngredientComponent,
    IngredientComponent,
    IngredientsComponent,
    ListContainerComponent,
  ],
  imports: [CommonModule, FormsModule, FontAwesomeModule],
})
export class IngredientsModule {}
