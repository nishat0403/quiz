import { Component, OnInit } from '@angular/core';
import {Option, Question} from "../../quiz/quiz.model";
import {QuizService} from "../../quiz/quiz.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {

  question: { options: any[]; text: string }

  constructor(private router: Router, private quizService: QuizService) {
    this.question = {text: '', options: []}
  }

  ngOnInit(): void {
  }

  submit(data: any) {
    let option1: Option = {text: data.option1, isCorrect: true}
    let option2: Option = {text: data.option2, isCorrect: false}
    let option3: Option = {text: data.option3, isCorrect: false}
    let option4: Option = {text: data.option4, isCorrect: false}
    let options: Option[] = this.shuffle([option1, option2, option3, option4])
    this.question.text = data.text
    this.question.options = options
    this.quizService.addQuestion(this.question).subscribe((data) => {})
    this.router.navigate(['/admin'])
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
