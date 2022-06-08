import { Ingredient } from './../ingredient.model';
import { Component, Input, OnInit } from '@angular/core';

import {
  IconDefinition,
  faQuestion,
  faBreadSlice,
  faLeaf,
  faBottleDroplet,
  faDrumstickBite,
  faBacon,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
})
export class IngredientComponent implements OnInit {
  @Input() ingredient?: Ingredient;

  icon?: IconDefinition;
  bgColor?: string;

  ngOnInit(): void {
    switch (this.ingredient?.kind) {
      case 'bread':
        this.icon = faBreadSlice;
        this.bgColor = 'amber-50';
        return;
      case 'vegetable':
        this.icon = faLeaf;
        this.bgColor = 'amber-50';
        return;
      case 'sauce':
        this.icon = faBottleDroplet;
        this.bgColor = 'amber-50';
        return;
      case 'patty':
        this.icon = faDrumstickBite;
        this.bgColor = 'amber-50';
        return;
      case 'extra':
        this.icon = faBacon;
        this.bgColor = 'amber-50';
        return;
      default:
        this.icon = faQuestion;
        this.bgColor = 'amber-50';
    }
  }
}
