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

  // Id considering prepared articles from articles.ts
  id = 6

  constructor() { }

  getArticles(){
    return this.articles
  }

  // Add new article and increment id
  addArticle(title: string, text: string){
    let article = {
      id: this.id,
      title: title,
      text: text
    }
    this.id++
    this.articles.unshift(article)
  }

  // Change existing article, replaces title and text with given args
  setArticle(article: Article, title: string, text: string){
    article.title = title
    article.text = text
  }

  // Deletes one given article from list
  deleteArticle(article: Article) {
    this.articles.splice(this.articles.indexOf(article), 1)
  }
}
