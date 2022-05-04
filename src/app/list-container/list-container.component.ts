import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { Ingredient } from '../ingredients/ingredient.model';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css'],
})
export class ListContainerComponent implements OnInit {
  @Input() noList?: boolean;

  ngOnInit(): void {
    // this.renewList();
  }
}
