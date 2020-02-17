import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuizComponent} from "./quiz/quiz.component";
import {ResultComponent} from "./result/result.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AdminComponent} from "./admin/admin.component";
import {QuestionDetailComponent} from "./admin/question-detail/question-detail.component";
import {QuestionAddComponent} from "./admin/question-add/question-add.component";


const routes: Routes = [
  {path: '', redirectTo: 'quiz', pathMatch: 'full'},
  {path: 'quiz', component: QuizComponent},
  {path: 'result', component: ResultComponent},

  {path: 'admin/questions', redirectTo: 'admin', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/question/add', component: QuestionAddComponent},
  {path: 'admin/question/:id', component: QuestionDetailComponent},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
