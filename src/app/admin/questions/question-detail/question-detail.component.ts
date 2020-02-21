import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../../../models/question";

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  @Input() question: Question

  constructor() {
  }

  ngOnInit(): void {}

}
