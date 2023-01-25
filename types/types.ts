export enum BtnTypes {
  BUTTON = 'button',
  SUBMIT = 'submit'
}

export type FormValues = {
  name: string,
  phone: string,
  email: string,
}

export type QuestionType = {
  id: number,
  class: string,
  question: string,
  answer: string,
}