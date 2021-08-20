import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Films } from '../models/films';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Results } from '../models/results';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private url = `${environment.url_Api}/films`;

  constructor(
    private http: HttpClient
  ) { }

  getAllFilms(): Observable<Films[]>{
    return this.http
      .get(`${this.url}`)
      .pipe(
        map( (resp: Results) => resp.results)
      );
  }

}
