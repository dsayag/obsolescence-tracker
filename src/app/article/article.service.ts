import { Injectable } from '@angular/core';
import { Article } from './article';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient){}

  getArticleList(): Observable<Article[]>{
    return this.http.get<Article[]>('api/articles')
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );    
  }

  getArticleById(articleId: number): Observable<Article|undefined> {
    return this.http.get<Article>(`api/articles/${articleId}`)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined))
        );    
  }

  addArticle(article: Article): Observable<Article> {
    const httpOptions = {
      headers: new HttpHeaders({ ' Content-Type': 'application/json' })
    };

    return this.http.post<Article>('api/articles', article, httpOptions)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined))
        );
  }

  updateArticle(article: Article): Observable<Article|undefined> {
    const httpOptions = {
      headers: new HttpHeaders({ ' Content-Type': 'application/json' })
    };
    return this.http.put('api/articles', article, httpOptions)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined))
        );
  }

  deleteArticleById(articleId: number): Observable<null> {
    return this.http.delete(`api/articles/${articleId}`)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined))
        );      
  }

  searchArticleList(term: string): Observable<Article[]> {
    if(term.trim()){      
      return this.http.get<Article[]>(`api/articles/?name=${term}`)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
        );
    } else{
      return of([]);      
    }    
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getArticleCategoryList(): string[]{
    return [
      'Fruit',
      'Légume',
      'Produit de la ferme',
      'Fromage',
      'Produit laitier',
      'Céréale',
      'Maison',
      'Epicerie sucrée',
      'Epicerie salée',
      'Boisson',
      'Boisson alcoolisée',
      'Sans catégorie'
    ];
  }
  
}
