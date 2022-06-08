import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BurgerListComponent } from './burger-list/burger-list.component';
import { NgModule } from '@angular/core';
import { BurgerComponent } from './burger/burger.component';

@NgModule({
  declarations: [BurgerListComponent, BurgerComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
})
export class BurgersModule {}
