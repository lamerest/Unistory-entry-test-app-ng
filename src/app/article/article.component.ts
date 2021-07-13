import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../article.service";
import { Article } from "../articles";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  /* ARTICLE
  * Page of article with given id
  *
  * Functionality:
  * - change article
  * - delete article
  *
  * Has child:
  * confirmation-window - modal window to confirm deleting article
  *
  * closeModalWindow() -  hides modal window
  * openModalWindow()  -  shows modal window
  * changeArticle(article: Article, title: string, text: string) - edit article with given title and text
  * deleteArticle(article: Article) - delete given article */

  article: Article | undefined
  isModalWindowVisible: boolean = false

  // Title and text used for changing article
  title: string = ""
  text: string = ""

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {

    // Get id of article from route
    const routeParams = this.route.snapshot.paramMap
    const articleIdFromRoute = Number(routeParams.get('articleId'))

    // Search for article with given id in ArticleService
    this.article = this.articleService.articles.find(article => article.id === articleIdFromRoute)

    // Used to avoid the empty article
    if (this.article){
      this.title = this.article.title
      this.text = this.article.text
    }
  }

  // Check fields if they are empty and saves article, otherwise alerts user
  changeArticle(article: Article){

    if (this.title && this.text){
      window.alert("Изменения сохранены.")

      this.articleService.setArticle(article, this.title, this.text)
    } else window.alert("Пожалуйста, заполните все поля")

  }

  // Deletes article using ArticleService and returns user to Blog page
  deleteArticle(article: Article){
    this.articleService.deleteArticle(article)
    this.router.navigate(['/'])
  }

  closeModalWindow(){
    this.isModalWindowVisible = false
  }

  openModalWindow(){
    this.isModalWindowVisible = true
  }
}
