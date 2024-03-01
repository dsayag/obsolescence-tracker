import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Article } from '../article/article';
import { Router } from '@angular/router';
import { ArticleService } from '../article/article.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-research-tracker',
  templateUrl: './research-tracker.component.html',
  styleUrl: './research-tracker.component.css'
})
export class ResearchTrackerComponent {
  
  // indique le flux (chaîne de caractère) de recherche
  searchTerms = new Subject<string>();
  // afficher le résultat de la recherche
  articles$: Observable<Article[]>;

  loginform: FormGroup = new FormGroup({
    brand : new FormControl(''),
    model : new FormControl('')
  });

  selectedArticle: Article;

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
    );    
  }

  search(term: string){
    this.searchTerms.next(term);
  }  

  selectArticle(article: Article){
    this.selectedArticle = article;
    console.log(this.selectedArticle, "article sélectionné");
  }

  // Méthode qui redirige l'utilisateur selon le mot indiqué dans la recherche
  goToDetailArticle(){
    if(this.selectedArticle){
      const link = ["/article", this.selectedArticle.id];    
      this.router.navigate(link);    
    }
  }
  
  onSubmit() {
    const formData = this.loginform.value;
    console.log(formData);
    if(this.loginform.valid){
      this.goToDetailArticle();
    }
  }

}
