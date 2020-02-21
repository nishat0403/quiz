import {Option} from "./option";

export interface Question {
  _id: string
  text: string
  options: Option[]
}
