import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  articleList: Article[];
  article: Article|undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
    ) { }

  ngOnInit() {
    // récupérer l'id depuis mon url
    const articleId: string|null = this.route.snapshot.paramMap.get("id");
    // Vérifier s'il y a un article ou pas
    if(articleId){      
      this.articleService.getArticleById(+articleId)
        .subscribe(article => this.article = article);
    }
  }

  goToArticleList(){
    this.router.navigate(['/articles']);
  }

  goToEditArticle(article: Article){
    this.router.navigate(['edit/article', article.id]);
  }

  deleteArticle(article: Article){
    this.articleService.deleteArticleById(article.id)
      .subscribe(() => this.goToArticleList());
  }

}
