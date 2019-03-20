import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  coin=0;
  currentvalue=1;
  recode={action:null,amount:null,value:null,id:null};
  saverecode=[];

  constructor(private _http: HttpClient) {};
  
  sharecoin(){
    return this.coin;
  };

  sharecurrentvalue(){
    return this.currentvalue;
  };

  sharerecode(){
    return this.saverecode;
  };

  addOneCoin(){
    this.coin++;
  };

  loseOneCoin(){
    this.coin--; 
  };

  addvalue(){
    this.currentvalue++;
  };

  losevalue(){
    this.currentvalue--; 
  };

  makerecode(action:any,amount:any,value:any){
    
    let num=Math.floor(Math.random()*999999);
    this.recode={action:action,amount:amount,value:value,id:num};
    this.saverecode.push(this.recode);
    this.recode={action:null,amount:null,value:null,id:null};
  
  }

}
