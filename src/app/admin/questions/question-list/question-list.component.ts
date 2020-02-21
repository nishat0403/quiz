import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../../app.service";
import {Router} from "@angular/router";
import {Question} from "../../../../models/question";

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
    this._quizService.getQuestions().subscribe((questions) => {
      this.questions = <Question[]>questions
      this.question = this.questions[0]
    })
  }

  onQuestionClick(question: Question) {
    this.question = question
  }
}
