import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ArticleService } from "../article.service";

@Component({
  selector: 'app-add-article-modal',
  templateUrl: './add-article-modal.component.html',
  styleUrls: ['./add-article-modal.component.css']
})
export class AddArticleModalComponent implements OnInit {

  /* ADD-ARTICLE-MODAL */
  // Defines modal window for creating new article using ArticleService
  // Used as child in blog.component

  // Title and text for new article
  title: string = ""
  text: string = ""

  // Sends boolean to close modal window
  @Output() closeModal = new EventEmitter<boolean>()

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
  }

  // Check if title and text are empty, if not, creates a new article, else alerts user
  addArticle(): void{

    if (this.title && this.text){

      this.articleService.addArticle(this.title, this.text)
      this.closeModalWindow()

    } else window.alert("Пожалуйста, заполните все поля.")

  }

  closeModalWindow(){
    this.closeModal.emit(false)
  }

}
