import { BurgersModule } from './burgers/burgers.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { IngredientsModule } from './ingredients/ingredients.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IngredientsModule,
    BurgersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
