import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { FilmsComponent } from './components/films/films.component';
import { FilmcharacterComponent } from './components/filmcharacter/filmcharacter.component';


@NgModule({
  declarations: [
    FilmsComponent,
    FilmcharacterComponent
  ],
  imports: [
    CommonModule,
    FilmRoutingModule
  ],
  exports: [FilmsComponent]
})
export class FilmModule { }
