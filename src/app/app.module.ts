import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {QuizComponent} from './quiz/quiz.component';
import {ResultComponent} from './quiz/result/result.component';
import {QuizService} from "./app.service";
import {HttpClientModule} from "@angular/common/http";
import {AdminComponent} from "./admin/admin.component";
import {QuestionListComponent} from "./admin/questions/question-list/question-list.component";
import {QuestionAddComponent} from './admin/questions/question-add/question-add.component';
import {FormsModule} from "@angular/forms";
import {QuestionDetailComponent} from './admin/questions/question-detail/question-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuizComponent,
    ResultComponent,
    AdminComponent,
    QuestionListComponent,
    QuestionAddComponent,
    QuestionDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
