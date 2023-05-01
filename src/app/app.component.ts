import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'visit-panama';
  
  isLandingPage = false;
  private routerSub!: Subscription;

  constructor(private _router: Router){
  }

  ngOnInit(){
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateIsLandingPage(event.url);
      }
    });
  }

  private updateIsLandingPage(url: string){
    this.isLandingPage = url === '/';
  }
  
  ngOnDestroy(){
    if (this.routerSub){
      this.routerSub.unsubscribe();
    }
  }
}
