import {Component, OnInit} from '@angular/core';
import {Question, Option} from "./quiz.model";
import {QuizService} from "./quiz.service";
import {Result} from "../result/result.model";

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
  questionsCompleted: Set<number>
  result: Result

  constructor(private _quizService: QuizService) {
    this.currentIndex = 0
    this.selectedOptions = []
    this.questionsCompleted = new Set<number>()
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
    if (this.questionsCompleted.has(option.question_id)) {
      let previousOption: Option
      for (let selectedOption of this.selectedOptions) {
        if (selectedOption.question_id == option.question_id) {
          previousOption = selectedOption
          break
        }
      }
      this.selectedOptions = this.selectedOptions.filter(option => option !== previousOption)
    }

    this.selectedOptions.push(option);
    this.questionsCompleted.add(this.question.id)
  }

  submit() {
    this._quizService
      .submitQuizData(this.selectedOptions, [...this.questionsCompleted])
      .subscribe(data => {
        this.result = <Result> data
      })
  }
}
