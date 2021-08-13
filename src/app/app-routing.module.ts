import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'films',
    loadChildren: () =>
      import('./pages/film/film.module').then((m) => m.FilmModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./pages/character/character.module').then((m) => m.CharacterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
