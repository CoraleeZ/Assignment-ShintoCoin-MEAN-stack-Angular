import { Component, OnInit, asNativeElements } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  ans={answer:''};
  question=[
    {question:'x=5;\n y=x;\n z=y+1;\n x+z=?',answer:"11"},
    {question:'x="12";\n y=x;\n z=y+1;\n x+z=?',answer:"12121"},
    {question:'x=[1,2,3];\n y=x;\n z=y.pop();\n z=?',answer:"3"}
  ]
  pickqus={question:'',answer:null};
  coin=0;
  value=0;

  constructor( 
    private _route: ActivatedRoute,
    private _router: Router,
    private _mine:HttpService
    ) { }

  ngOnInit() {
    let num=Math.floor(Math.random()*3);
    this.pickqus=this.question[num];
    this.coin=this._mine.sharecoin();
    this.value=this._mine.sharecurrentvalue();
  };

  answer(){
    console.log(this.ans);
    console.log(this.pickqus.answer)
    if (this.ans.answer==this.pickqus.answer){
      this._mine.addOneCoin();
      this._mine.makerecode('mine',1,this.value)
    }

    this.ans={answer:''};
  };

}