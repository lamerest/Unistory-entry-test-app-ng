import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { BlogComponent } from './blog/blog.component';
import { AddArticleModalComponent } from './add-article-modal/add-article-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConfirmationWindowComponent } from './confirmation-window/confirmation-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    BlogComponent,
    AddArticleModalComponent,
    ConfirmationWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
