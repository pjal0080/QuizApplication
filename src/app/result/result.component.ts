import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  correctAnswer:number=0;
  wrongAnswer:number=0;
  unattemptedAnswer:number=0;
  //result:Answer;
  constructor(private router:Router) {
   let obj= this.router.getCurrentNavigation()?.extras.state;
   if(obj!=null)
   {
    this.correctAnswer=obj.correctAnswer;
    this.wrongAnswer=obj.wrongAnswer;
    this.unattemptedAnswer=obj.unattemptedAnswer;
   }
   console.log(this.correctAnswer)
  console.log(this.wrongAnswer)
  console.log(this.unattemptedAnswer)
   

   }

  ngOnInit(): void {
  }
  GoToHomePage()
  {
     this.router.navigate(['']);
  }

}
interface Answer{
  correctAnswer:number;
  wrongAnswer:number;
  unattemptedAnswer:number;
}