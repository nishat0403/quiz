import {Component, OnInit} from '@angular/core';
import {Question} from "../../quiz/quiz.model";
import {QuizService} from "../../quiz/quiz.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[]
  question: Question

  constructor(private _quizService: QuizService, private router: Router) {
  }

  ngOnInit(): void {
    this._quizService.getQuestions().subscribe((questions) => this.questions = <Question[]>questions)
  }

  onQuestionClick(question: Question) {
    this.question = question
  }
}
