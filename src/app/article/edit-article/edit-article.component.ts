import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})

export class EditArticleComponent implements OnInit {
  article: Article|undefined;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    // Recupérer l'id depuis mon url
    const articleId: string|null = this.route.snapshot.paramMap.get("id");
    // Vérifier s'il y a un article ou s'il est indéfini
    if(articleId){      
      this.articleService.getArticleById(+articleId)
        .subscribe(article => this.article = article);
    }else{
      this.article = undefined;
    }
  }

}
