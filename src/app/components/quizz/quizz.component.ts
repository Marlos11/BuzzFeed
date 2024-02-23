import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import quizz from '../../../assets/data/quizz-question.json'
@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})



export class QuizzComponent implements OnInit {

  title: string = ""
  questions: any

  questionSelected: any

  answers: string[] = []
  answersSelected: string = ""

  questionIndex: number = 0
  questionMaxIndex: number = 0

  finished: boolean = false

  ngOnInit(): void {
    if (quizz) {
      this.finished = false
      this.title = quizz.title

      this.questions = quizz.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length

      console.log(this.questionMaxIndex)
      console.log(this.questionIndex)
      console.log(this.questions)
      console.log(this.questionSelected)
    }


  }

  playerChoose(value: string) {
    this.answers.push(value)
    this.nextQuestion()
  }

  async nextQuestion() {
    this.questionIndex += 1

    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex]
    } else {
        const finalAnswer:string = await this.checkResult(this.answers)
      this.finished = true
      this.answersSelected =quizz.results[finalAnswer as keyof typeof quizz.results]
    }
  }

  async checkResult(answers: string[]) {
    const result = answers.reduce((previous, current, i, arr) => {
      if (
        arr.filter(item => item === previous).length >
        arr.filter(item => item === current).length

      ) {
        return previous
      } else {
        return current
      }

    })
    return result
  }

  
  
}
