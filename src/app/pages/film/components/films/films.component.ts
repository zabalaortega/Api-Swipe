import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../../../core/services/films.service';
import { Films } from '../../../../core/models/films';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Films[];

  constructor(private filmService: FilmsService) { }

  ngOnInit(): void {
    this.filmService.getAllFilms().subscribe((films) => {
      this.films = films;
      // console.log(films);
    });
  }

}
