import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { QuestionsService } from '../services/questions.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private questionservice:QuestionsService,private router:Router) {
   // this.countdow=new CountdownComponent();
   }
 ques:Question[]=[];
 currentQues:any;
 currentQuesNum:number=1;
 currentQuesOptions:string[]=[]
 isValue:string="";
 disableNext:boolean=false;
 disablePrev:boolean=false;
 correctAnswer:number=0;
 wrongAnswer:number=0;
 unattemptedAnswer:number=0;
 //@ViewChild('cd', { static: false })
 // private countdow: CountdownComponent;

 //json:Map<number,string>={}
  map1 = new Map();
  ngOnInit(): void {

     this.ques=this.questionservice.question;
     console.log(this.ques)
     for(let q of this.ques)
     {
        if(q.questionId===1)
        {
          this.disablePrev=true;
          this.currentQues=q.question;
          this.currentQuesOptions=q.options;
        }
     }
     //this.currentQues=this.ques[0];
     this.currentQuesNum=1;
   //s  this.countdown.begin();
  }
  SubmitTest()
{
  for(let q of this.ques)
  {
     if(this.map1.has(q.questionId))
     {
         if(this.map1.get(q.questionId)===q.answer)
         {
           this.correctAnswer+=1;
         }
         else{
           this.wrongAnswer+=1;
         }
     }
     else{
        this.unattemptedAnswer+=1;
     }
  }
  console.log(this.correctAnswer)
  console.log(this.wrongAnswer)
  console.log(this.unattemptedAnswer)
  console.log("submit test1")
  let obj:Answer={unattemptedAnswer:this.unattemptedAnswer,correctAnswer:this.correctAnswer,
    wrongAnswer:this.wrongAnswer
  }
  obj['unattemptedAnswer']=this.unattemptedAnswer;
  
   this.router.navigate(['result'],{ state: obj });
} 
 handleEvent(event:any){
    console.log(event);
    if(event.action==="done")
    {
      console.log("submit test");
      this.SubmitTest();
    }

  }
  answerGiven(value: any,id:number)
  {
     this.map1.set(this.currentQuesNum,value);
     console.log(this.map1)
     this.isValue=value;
  }
  clearResponse()
  {
     this.map1.delete(this.currentQuesNum);
     console.log(this.map1);
     this.isValue="";

  }
  gotoQuestion(quesId:number)
  {
     this.currentQuesNum=quesId;
     if(this.currentQuesNum==this.ques.length)
    {
       console.log("last question");
       this.disableNext=true;

    }
    else
    {
      this.disableNext=false;
    }
    if(this.currentQuesNum==1)
    {
       console.log("last question");
       this.disablePrev=true;
    }
    else
    {
      this.disablePrev=false;
    }
    for(let q of this.ques)
     {
        if(q.questionId===this.currentQuesNum)
        {
          this.currentQues=q.question;
          this.currentQuesOptions=q.options;
          this.isValue=this.map1.get(q.questionId);
        }
     }
  }
  NextQuestion(){
    this.currentQuesNum+=1;
    this.disablePrev=false;
    if(this.currentQuesNum==this.ques.length)
    {
       console.log("last question");
       this.disableNext=true;

    }
    for(let q of this.ques)
     {
        if(q.questionId===this.currentQuesNum)
        {
          this.currentQues=q.question;
          this.currentQuesOptions=q.options;
          this.isValue=this.map1.get(q.questionId);
        }
     }
     console.log(this.currentQues)
  }
  PrevQuestion(){
    this.currentQuesNum-=1;
    this.disableNext=false;
    if(this.currentQuesNum==1)
    {
       console.log("last question");
       this.disablePrev=true;
    }
    else
    {
      this.disablePrev=false;
    }
    for(let q of this.ques)
     {
        if(q.questionId===this.currentQuesNum)
        {
          this.currentQues=q.question;
          this.currentQuesOptions=q.options;
          this.isValue=this.map1.get(q.questionId);
        }
     }
  }

}
interface Question{
  questionId:number;
  question:string;
  options:string[];
  answer:string;
  
}
interface Answer{
  correctAnswer:number;
  wrongAnswer:number;
  unattemptedAnswer:number;
}

