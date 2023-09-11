import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Character } from '../character';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL = 'https://rickandmortyapi.com/api/character/1,10'

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<Character[]>{
    return this.http.get<Character[]>(this.URL)
    /* .pipe(
      tap(_=> this.log('fetched characters')),
      catchError(this.handleError)
    ); */
  }
}
