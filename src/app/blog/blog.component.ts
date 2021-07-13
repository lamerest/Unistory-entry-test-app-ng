import { Component } from '@angular/core';
import { ArticleService } from "../article.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  /* BLOG
  * Page with list of articles from ArticleService
  *
  * Functionality:
  * - display articles
  * - add new articles
  * - send user to a chosen article
  *
  * Has child:
  * add-article-modal - modal window component for adding new articles
  *
  * closeModalWindow() - hides modal window
  * openModalWindow() - shows modal window
  * addArticle() - creates new Article throw ArticleService
  * */

  articles = this.articleService.getArticles()

  // Responsible for visibility of add-modal-window component on page
  isModalWindowVisible = false

  constructor(
    private articleService: ArticleService,
  ) { }

  public closeModalWindow(){
    this.isModalWindowVisible = false
  }

  public openModalWindow(){
    this.isModalWindowVisible = true
  }

  // Check if title and text are empty, if not, creates a new article, else alerts user
  addArticle(props: string[]){
    this.articleService.addArticle(props[0], props[1])
    this.closeModalWindow()
  }

}
