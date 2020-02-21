import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuizComponent} from "./quiz/quiz.component";
import {ResultComponent} from "./result/result.component";
import {AdminComponent} from "./admin/admin.component";
import {QuestionAddComponent} from "./admin/questions/question-add/question-add.component";


const routes: Routes = [
  {path: '', redirectTo: 'quiz', pathMatch: 'full'},
  {path: 'quiz', component: QuizComponent},
  {path: 'result', component: ResultComponent},

  {path: 'admin/questions', redirectTo: 'admin', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/question/add', component: QuestionAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
