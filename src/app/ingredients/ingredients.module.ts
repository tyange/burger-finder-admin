import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListContainerComponent } from '../list-container/list-container.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientsComponent } from './ingredients.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { IngredientDetailComponent } from './ingredient-detail/ingredient-detail.component';
import { IngredientIconComponent } from './ingredient-icon/ingredient-icon.component';

@NgModule({
  declarations: [
    AddIngredientComponent,
    IngredientComponent,
    IngredientIconComponent,
    IngredientDetailComponent,
    IngredientsComponent,
    ListContainerComponent,
  ],
  imports: [CommonModule, FormsModule, FontAwesomeModule, RouterModule],
})
export class IngredientsModule {}
