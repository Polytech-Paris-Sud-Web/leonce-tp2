import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

import { Article, ArticleCreation } from './models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient) { }


  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles?_sort=date&_order=desc");
  }

  public getTopArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles?_sort=date&_order=desc&_page=1");
  }

  public getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${environment.apiUrl}/articles/${id}`);
  }

  public deleteArticle(id: number): Observable<Article> {
    return this.http.delete<Article>(`${environment.apiUrl}/articles/${id}`);
  }

  public addArticle(article: ArticleCreation): Observable<Article> {
    const body = {
      date: new Date(),
      ...article
    };

    return this.http.post<Article>("http://localhost:3000/articles", body);
  }
}
