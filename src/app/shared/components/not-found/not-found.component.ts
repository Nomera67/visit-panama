import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(public _router: Router) { }

  ngOnInit(): void {
  }

  toHome(){
    this._router.navigate(['/home']);
  }
  toTourism(){
    this._router.navigate(['/tourisme']);
  }
  toInfo(){
    this._router.navigate(['/informations'])
  }

}
