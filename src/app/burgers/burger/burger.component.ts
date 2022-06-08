import { Component, Input, OnInit } from '@angular/core';

import { Burger } from '../burger.model';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css'],
})
export class BurgerComponent implements OnInit {
  @Input() burger?: Burger;

  ngOnInit(): void {}
}
