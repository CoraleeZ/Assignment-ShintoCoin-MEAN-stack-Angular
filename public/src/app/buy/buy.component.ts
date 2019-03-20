import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  bu={coin:null};
  coin=0;
  value=0;

  constructor( 
    private _route: ActivatedRoute,
    private _router: Router,
    private _buy:HttpService
    ) { }

  ngOnInit() {
    this.coin=this._buy.sharecoin();
    this.value=this._buy.sharecurrentvalue();
  }

  buy(){
    
    let num=this.bu.coin;

    this._buy.makerecode('buy',num,this.value)

    for(let x =0;x<num;x++){
      this._buy.addvalue();
      this._buy.addOneCoin();
    };

    this.bu={coin:null};
    this.ngOnInit();

  }

}
