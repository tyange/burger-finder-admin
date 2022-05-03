import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  items?: Ingredient[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.renewList();
  }

  renewList() {
    this.http
      .get<{ [index: string]: Ingredient }>('http://localhost:4000/ingredients')
      .subscribe((res) => {
        for (let index in res) {
          console.log(res[index]);
          this.items?.push(res[index]);
        }
      });
  }

  logging() {
    console.log(this.items);
  }
}
