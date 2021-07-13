import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-confirmation-window',
  templateUrl: './confirmation-window.component.html',
  styleUrls: ['./confirmation-window.component.css']
})
export class ConfirmationWindowComponent {

  /* CONFIRMATION-WINDOW
  * Modal window with confirmation of article deletion */

  // Send signal to close modal window
  @Output() closeModal = new EventEmitter<any>()

  // Send confirmation to delete article
  @Output() deleteConfirmed = new EventEmitter<any>()
}
