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

  @Input() question: Question

  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizService) {
  }

  ngOnInit(): void {}

}
