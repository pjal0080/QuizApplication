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
    question:"which team has scored lowest ever by a team in IPL?",
    options:["RCB","MI","SRH","KKR"],
    answer:"RCB",
  },
  {
    questionId:4,
    question:"Which car manufacturer was the first to win 100 F1 races?",
    options:["Ferrari","Nissan","Ford","Tata"],
    answer:"Ferrari",
   }
   ,{
    questionId:5,
    question:"Who is the first player to feature in 200 IPL games?",
    options:["MS Dhoni","Virat Kohli","Suresh Raina","Zaheer Khan"],
    answer:"MS Dhoni",
   },
   {
    questionId:6,
    question:"which team has scored lowest ever by a team in IPL?",
    options:["RCB","MI","SRH","KKR"],
    answer:"RCB",
  }
]
}
interface Question{
  questionId:number;
  question:string;
  options:string[];
  answer:string;
}
