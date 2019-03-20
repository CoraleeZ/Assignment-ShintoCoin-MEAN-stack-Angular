import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-tranction',
  templateUrl: './tranction.component.html',
  styleUrls: ['./tranction.component.css']
})
export class TranctionComponent implements OnInit {
  tran={};

  constructor( 
    private _route: ActivatedRoute,
    private _router: Router,
    private _tran:HttpService
    ) { }

  ngOnInit() {

    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);

      let recode = this._tran.sharerecode();
      console.log('all recode: ',recode)

      for(let x = 0;x<recode.length;x++){
        if(recode[x].id==params['id']){
          this.tran=recode[x];
          break
        }
      }
  });


  }

}
