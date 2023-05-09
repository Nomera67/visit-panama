import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
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

  
  cursorX = 0;
  cursorY = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent){
    const cursor = document.getElementById('cursorChanged');
    const cursorWidth = cursor!.clientWidth;
    const cursorHeight = cursor!.clientHeight;

    this.cursorX = event.clientX - cursorWidth / 2;
    this.cursorY = event.clientY - cursorHeight / 2;

    const keyframes = {
      transform: `translate(${this.cursorX}px, ${this.cursorY}px)`
    }

    cursor?.animate(keyframes, {
      duration: 800,
      fill: 'forwards'
    })
  }

}
