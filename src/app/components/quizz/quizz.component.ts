import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [NgIf],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})



export class QuizzComponent implements OnInit {

  title: string = ""
  question: any
  questionSelected: any

  answers: string[] = []
  answersSelected: string = ""

  qustionIndex: number = 0
  questionMaxIndex: number = 0

  finished: boolean = false

  ngOnInit(): void { }

}
