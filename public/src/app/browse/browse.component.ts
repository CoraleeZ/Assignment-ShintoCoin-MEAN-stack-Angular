import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  recode:any[]=[];

  constructor( 
    private _route: ActivatedRoute,
    private _router: Router,
    private _browse:HttpService
    ) { }

  ngOnInit() {
    
    this.recode=this._browse.sharerecode();

  }

}
