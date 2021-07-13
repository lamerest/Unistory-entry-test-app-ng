import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ArticleService } from "../article.service";

@Component({
  selector: 'app-add-article-modal',
  templateUrl: './add-article-modal.component.html',
  styleUrls: ['./add-article-modal.component.css']
})
export class AddArticleModalComponent {

  /* ADD-ARTICLE-MODAL */
  // Defines modal window for getting title and text for new article
  // Used as child in blog.component

  // Properties for new article
  title: string = ''
  text: string = ''

  // Gets boolean to open modal window
  @Input() openModal: boolean = false

  // Sends boolean to close modal window
  @Output() closeModal = new EventEmitter<boolean>()

  // Sends inputs from window to parent to create new article
  @Output() articleProperties = new EventEmitter<any>()

  // Check if inputs are empty, then sends properties to parent
  checkInputs(){
    if (this.title && this.text){
      this.articleProperties.emit([this.title, this.text])
      // Need to
      this.title = ''
      this.text = ''
    } else window.alert("Пожалуйста, заполните все поля!")
  }
}
