import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from '../models/characters';
import { map } from 'rxjs/operators';
import { Results } from '../models/results';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private url = `${environment.url_Api}/people`;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Characters[]> {
    return this.http
      .get(`${this.url}`)
      .pipe(map((response: any) => response.results));
  }
}
