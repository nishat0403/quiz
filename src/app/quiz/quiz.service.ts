import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Option, Question} from "./quiz.model";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient) {
  }

  getQuestions() {
    return this.http.get(this.baseUrl + 'quiz');
  }

  getQuestionById(id: number) {
    return this.http.get(this.baseUrl + 'quiz/' + id)
  }

  submitQuizData(selectedOptions: Option[]) {
    return this.http.post(this.baseUrl + 'quiz', {
      selectedOptions: selectedOptions,
    })
  }

  addQuestion(question: Question) {
    return this.http.post(this.baseUrl + 'quiz/question', question)
  }
}
