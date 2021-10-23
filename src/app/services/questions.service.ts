import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }
  question:Question[]=[
    {
    questionId:1,
    question:"Which car manufacturer was the first to win 100 F1 races?",
    options:["Ferrari","Nissan","Ford","Tata"],
    answer:"Ferrari",
   }
   ,{
    questionId:2,
    question:"Who is the first player to feature in 200 IPL games?",
    options:["MS Dhoni","Virat Kohli","Suresh Raina","Zaheer Khan"],
    answer:"MS Dhoni",
   },
   {
    questionId:3,
    question:"In which year did the Berlin wall fell?",
    options:["1991","1987","1990","1989"],
    answer:"1989",
  },
  {
    questionId:4,
    question:"Which city is the capital of Georgia?",
    options:["Kurd","Tbilisi","Dushanbe","Atlanta"],
    answer:"Tbilisi",
   }
   ,{
    questionId:5,
    question:"Who is the current president of India?",
    options:["Pratibha Patil","Ramnath Kovind","Pranav Mukherjee","Manmohan Singh"],
    answer:"Ramnath Kovind",
   },
   {
    questionId:6,
    question:"When did Russia conducted its first nuclear test?",
    options:["1947","1948","1949","1950"],
    answer:"1949",
  }
]
}
interface Question{
  questionId:number;
  question:string;
  options:string[];
  answer:string;
}
