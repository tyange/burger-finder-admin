import { Component, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Burger } from '../burger.model';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css'],
})
export class BurgerListComponent implements OnInit {
  burgers?: Array<Burger[]> = [];
  currentPageNum = 0;
  isInit = false;
  isLoading = false;
  isError = false;

  // fontawesome
  faSpinner = faSpinner;

  constructor() {}

  ngOnInit(): void {
    this.isLoading = true;
    this.burgers = [
      [
        {
          id: '1',
          name: '빅맥',
          brand: 'mc',
          ingredients: [
            { id: '2', name: 'test2', amount: 1, kind: 'bread' },
            { id: '3', name: 'test3', amount: 1, kind: 'bread' },
          ],
          isVegan: false,
          imageUrl: 'https://github.com/tyange',
        },
      ],
    ];
    this.isLoading = false;
  }
}
