import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ARTICLES } from './article/mock-article-list';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    console.log("Articles", ARTICLES);
    const articles = ARTICLES;
    return { articles };
  }
}
