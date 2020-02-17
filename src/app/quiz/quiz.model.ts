export interface Option {
  question_id: number
  text: string
  isCorrect: boolean
}

export interface Question {
  id: number
  text: string
  options: Option[]
}
