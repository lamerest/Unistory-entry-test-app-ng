import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ArticleService } from "../article.service";
import { Article } from "../articles";
import { Router } from "@angular/router";

@Component({
  selector: 'app-confirmation-window',
  templateUrl: './confirmation-window.component.html',
  styleUrls: ['./confirmation-window.component.css']
})
export class ConfirmationWindowComponent implements OnInit {

  /* CONFIRMATION-WINDOW
  * Modal window with confirmation of article deletion
  *
  * Functionality:
  * - delete article
  *
  * Parent:
  * article.component */

  // Gets deleting article
  @Input() article: Article|undefined

  // Send boolean to parent to close modal window
  @Output() closeModal = new EventEmitter<boolean>()

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // Deletes article using ArticleService and returns user to Blog page
  deleteArticle(article: Article){
    this.articleService.deleteArticle(article)
    this.router.navigate(['/'])
  }
}
