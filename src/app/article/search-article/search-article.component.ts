import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrl: './search-article.component.css'
})
export class SearchArticleComponent implements OnInit{
  
  // indique le flux (chaîne de caractère) de recherche
  searchTerms = new Subject<string>();
  // afficher le résultat de la recherche
  articles$: Observable<Article[]>;

  constructor(
    private router: Router,
    private articleService: ArticleService
  ){ }

  ngOnInit(): void {
    this.articles$ = this.searchTerms.pipe(
        // Permet d'attendre un certain temps pour renvoyer la recherche
        debounceTime(300),
        // Evite d'envoyer des doublons
        distinctUntilChanged(),
        // Permet de renvoyer uniquement le résultat et non un Observable 
        switchMap((term) => this.articleService.searchArticleList(term))
      )
  }

  search(term: string){
    this.searchTerms.next(term);
  }

  // Méthode qui redirige l'utilisateur selon le mot indiqué dans la recherche
  goToDetailArticle(article: Article){
    const link = ["/article", article.id];    
    this.router.navigate(link);    
  }
}
