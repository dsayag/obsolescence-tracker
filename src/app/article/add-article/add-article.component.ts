import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent implements OnInit {
  article: Article;  

  ngOnInit() {
    // Création d'un nouvel article
    this.article = new Article();
  }
}