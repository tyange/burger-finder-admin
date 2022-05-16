import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientListComponent } from './ingredients/ingredient-list/ingredient-list.component';
import { IngredientDetailComponent } from './ingredients/ingredient-detail/ingredient-detail.component';
import { EditIngredientComponent } from './ingredients/edit-ingredient/edit-ingredient.component';

const routes: Routes = [
  {
    path: 'ingredients',
    component: IngredientListComponent,
  },
  {
    path: 'ingredients/:id',
    component: IngredientDetailComponent,
  },
  {
    path: 'ingredients/:id/edit',
    component: EditIngredientComponent,
  },
  { path: '', redirectTo: '/ingredients', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
