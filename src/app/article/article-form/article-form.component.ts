import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})

export class ArticleFormComponent implements OnInit {
  @Input() article: Article;
  categories: string[];
  isAddForm: boolean;

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
  this.categories = this.articleService.getArticleCategoryList ();
  this.isAddForm = this.router.url.includes("add");  
  }

  // Vérification si l'article à une catégorie définie
  hasCategory(category: string): boolean {
    return this.article.categories.includes(category);
  }

  // Ajouter ou supprimer une catégorie avec une case cochée ou non
  selectCategory($event: Event, category: string){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.article.categories.push(category);
      //console.log("case cochée");
    }else{
      const index = this.article.categories.indexOf(category);
      this.article.categories.splice(index, 1);
      //console.log("case décochée");
    }
  }

  // Obligation de remplir au moins une catégorie par l'utilisateur
  isCategoriesValid(category: string): boolean {
    if(this.article.categories.length == 1 && this.hasCategory(category)){
      return false;
    }
    return true;
  } 

  // Fonction de soumission du formulaire et redirection de la page
  onSubmit() {
    if(this.isAddForm){
      this.articleService.addArticle(this.article)
      .subscribe((article: Article) => this.router.navigate(['/article', article.id]))
    }else{
      this.articleService.updateArticle(this.article)
      .subscribe(() => this.router.navigate(['/article', this.article.id]))
    }        
  }
}
