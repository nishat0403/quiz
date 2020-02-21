import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Option} from "../models/option";
import {Question} from "../models/question";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient) {
  }

  getQuestions() {
    return this.http.get(this.baseUrl + 'question');
  }

  getQuestionById(id: number) {
    return this.http.get(this.baseUrl + 'question/' + id)
  }

  submitQuizData(selectedOptions: Option[]) {
    return this.http.post(this.baseUrl + 'quiz', {
      selectedOptions: selectedOptions,
    })
  }

  addQuestion(question: { options: any[]; text: string }) {
    return this.http.post(this.baseUrl + 'question', question)
  }

  deleteQuestion(question: Question) {
    return this.http.delete(this.baseUrl + 'question/' + question._id)
  }
}
