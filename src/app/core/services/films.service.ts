import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Films } from '../models/films';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private url = `${environment.url_Api}/films`;

  constructor(
    private http: HttpClient
  ) { }

  // tslint:disable-next-line: typedef
  getAllFilms(){
    return this.http
      .get('https://swapi.dev/api/films');
  }

}
