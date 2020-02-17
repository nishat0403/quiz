import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../quiz/quiz.model";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {QuizService} from "../../quiz/quiz.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  question: Question

  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizService) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.quizService.getQuestionById(id).subscribe((question) => this.question = <Question> question)
  }

}
