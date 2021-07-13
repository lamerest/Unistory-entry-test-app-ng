import { Injectable } from '@angular/core';
import { Article, articles } from "./articles";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  /* ArticleService
  * Service to work with list of article objects.
  *
  * Methods:
  * - getArticles()
  * - addArticle(title: string, text: string)
  * - setArticle(article: Article, title: string, text: string)
  * - deleteArticle(article: Article)
  * */

  // Get prepared articles from articles.ts
  articles: Article[] = articles

  // Id consider prepared articles from articles.ts
  id = 6

  constructor() { }

  getArticles(){
    return this.articles
  }

  // Add new article and increment id
  addArticle(title: string, text: string){
    this.id++
    this.articles.unshift({
      id: this.id,
      title: title,
      text: text
    })
    console.log(this.articles)
  }

  // Change existing article, replaces title and text with given args
  setArticle(article: Article, title: string, text: string){
    article.title = title
    article.text = text
    console.log(this.articles)
  }

  // Deletes one given article from list
  deleteArticle(article: Article) {
    this.articles.splice(this.articles.indexOf(article), 1)
    console.log(this.articles)
  }
}
