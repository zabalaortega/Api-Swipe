import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmcharacterComponent } from './components/filmcharacter/filmcharacter.component';
import { FilmsComponent } from './components/films/films.component';

const routes: Routes = [
  {
    path: '', component: FilmsComponent
  },
  {
    path: ':title', component: FilmcharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmRoutingModule {}
