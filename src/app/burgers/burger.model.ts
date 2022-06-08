import { Ingredient } from './../ingredients/ingredient.model';

export interface Burger {
  id: string;
  name: string;
  brand: string;
  ingredients: Ingredient[];
  imageUrl: string | null;
  isVegan: boolean;
}
