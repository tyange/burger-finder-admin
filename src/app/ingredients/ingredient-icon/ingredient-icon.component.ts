import { Component, Input, OnInit } from '@angular/core';
import {
  faBacon,
  faBottleDroplet,
  faBreadSlice,
  faDrumstickBite,
  faLeaf,
  faQuestion,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ingredient-icon',
  templateUrl: './ingredient-icon.component.html',
  styleUrls: ['./ingredient.component.css'],
})
export class IngredientIconComponent implements OnInit {
  @Input() kind?: string;
  icon?: IconDefinition;

  ngOnInit(): void {
    switch (this.kind) {
      case 'bread':
        this.icon = faBreadSlice;
        return;
      case 'vegetable':
        this.icon = faLeaf;
        return;
      case 'sauce':
        this.icon = faBottleDroplet;
        return;
      case 'patty':
        this.icon = faDrumstickBite;
        return;
      case 'extra':
        this.icon = faBacon;
        return;
      default:
        this.icon = faQuestion;
    }
  }
}
