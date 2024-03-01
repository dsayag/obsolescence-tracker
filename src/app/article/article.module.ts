import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { BorderCardDirective } from './border-card.directive';
import { ArticleTypeColorPipe } from './article-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ArticleService } from './article.service';
import { FormsModule } from '@angular/forms';
import { ArticleFormComponent } from './article-form/article-form.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { LoaderComponent } from './loader/loader.component';
import { MatCardModule } from '@angular/material/card';

const articleRoutes: Routes = [
  { path: "edit/article/:id", component: EditArticleComponent },
  { path: "article/add", component: AddArticleComponent },
  { path: "articles", component: ArticleListComponent },
  { path: "article/:id", component: ArticleDetailComponent },
];

@NgModule({
  declarations: [
    ArticleDetailComponent,
    ArticleListComponent,
    BorderCardDirective,
    ArticleTypeColorPipe,
    ArticleFormComponent,
    EditArticleComponent,
    AddArticleComponent,
    SearchArticleComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(articleRoutes) ,
    MatCardModule   
  ],
  providers: [ArticleService]
})
export class ArticleModule { }
