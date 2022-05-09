import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientDetailComponent } from './ingredients/ingredient-detail/ingredient-detail.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

const routes: Routes = [
  { path: '', redirectTo: '/ingredients', pathMatch: 'full' },
  {
    path: 'ingredients',
    component: IngredientsComponent,
    // children: [
    //   { path: ':ingredientsId', component: IngredientDetailComponent },
    // ],
  },
  {
    path: 'ingredients/:id',
    component: IngredientDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
