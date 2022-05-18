import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from '../environments/environment';

import { Author } from './models/Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http : HttpClient) { }

  public getAuthor(name: string): Observable<Author> {
    return this.http.get<Author[]>(`${environment.apiUrl}/authors?name=${name}`).pipe(
      map(authors => authors[0])
    );
  }
}
