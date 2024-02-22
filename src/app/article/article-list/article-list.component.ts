import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  //articleSelected: Article|undefined;
  
selectArticle(arg0: string) {
throw new Error('Method not implemented.');
}
  articleList: Article[];

  constructor(
    private router: Router,
    private articleService: ArticleService
    ){}

  ngOnInit(){
    this.articleService.getArticleList()
      .subscribe(articleList => this.articleList = articleList);

    //this.articleList = this.articleService.getArticleList();
  }

  goToArticleDetail(article: Article){
    this.router.navigate(['/article', article.id]);
  }

  

  /* ngOnInit(){  
    console.table(this.articleList);    
  } */

  /* selectArticle(articleId: string){
    const article: Article|undefined = this.articleList.find(article => article.id == +articleId);
    if(article){
      console.log(`Vous avez sélectionné l'article suivant ${article.articleName}`);
      this.articleSelected = article;
    } else{
      console.log(`L'article sélectionné n'existe pas`);
      this.articleSelected = article;
    }
  } */

}

