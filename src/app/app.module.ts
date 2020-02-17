import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {QuizComponent} from './quiz/quiz.component';
import {ResultComponent} from './result/result.component';
import {QuizService} from "./quiz/quiz.service";
import {HttpClientModule} from "@angular/common/http";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponentComponent} from './login-component/login-component.component';
import {RegisterComponentComponent} from './register-component/register-component.component';
import {AdminComponent} from "./admin/admin.component";
import {QuestionListComponent} from "./admin/question-list/question-list.component";
import {QuestionDetailComponent} from "./admin/question-detail/question-detail.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import { UsersComponent } from './admin/users/users.component';
import { QuestionAddComponent } from './admin/question-add/question-add.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuizComponent,
    ResultComponent,
    PageNotFoundComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    AdminComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    DashboardComponent,
    UsersComponent,
    QuestionAddComponent,
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
