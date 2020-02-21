import {Component, OnInit} from '@angular/core';
import {QuizService} from "../app.service";
import {Result} from "./result/result.model";
import {Question} from "../../models/question";
import {Option} from "../../models/option";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: Question[]
  question: Question
  currentIndex: number
  selectedOptions: Option[]
  questionsCompleted: Set<string>
  result: Result

  constructor(private _quizService: QuizService) {
    this.currentIndex = 0
    this.selectedOptions = []
    this.questionsCompleted = new Set<string>()
  }

  ngOnInit(): void {
    this._quizService
      .getQuestions()
      .subscribe(questions => {
        this.questions = <Question[]>questions
        this.question = this.questions[this.currentIndex]
      })
  }

  next() {
    if (this.currentIndex >= this.questions.length - 1) return;
    this.currentIndex += 1
    this.question = this.questions[this.currentIndex]
  }

  previous() {
    if (this.currentIndex <= 0) return;
    this.currentIndex -= 1
    this.question = this.questions[this.currentIndex]
  }

  onOptionSelect(option: Option) {
    if (this.questionsCompleted.has(this.question._id)) {
      let previousOption: Option
      for (let selectedOption of this.selectedOptions) {
        if (this.question.options.indexOf(selectedOption) != -1) {
          previousOption = selectedOption
          break
        }
      }
      this.selectedOptions = this.selectedOptions.filter(option => option !== previousOption)
    }

    this.selectedOptions.push(option);
    this.questionsCompleted.add(this.question._id)
  }

  submit() {
    this._quizService
      .submitQuizData(this.selectedOptions)
      .subscribe(data => {
        this.result = <Result> data
        console.log(data)
      })
  }
}
