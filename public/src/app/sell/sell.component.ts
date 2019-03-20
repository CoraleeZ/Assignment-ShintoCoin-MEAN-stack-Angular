import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  sel={coin:null};
  coin=0;
  value=0;

  constructor( 
    private _route: ActivatedRoute,
    private _router: Router,
    private _sell:HttpService
    ) { }

  ngOnInit() {
    this.coin=this._sell.sharecoin();
    this.value=this._sell.sharecurrentvalue();
  }

  sell(){
    
    let num=this.sel.coin;

    this._sell.makerecode('sell',num,this.value)

    for(let x =0;x<num;x++){
      this._sell.losevalue();
      this._sell.loseOneCoin();
    };
    this.sel={coin:null};
    this.ngOnInit();
  }

}
