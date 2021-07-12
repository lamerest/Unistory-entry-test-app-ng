import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleComponent} from "./article/article.component";
import {BlogComponent} from "./blog/blog.component";

const routes: Routes = [
  {path: '', component: BlogComponent},
  {path: 'article/:articleId', component: ArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
