import { Component, OnInit, HostListener } from '@angular/core';
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

  constructor( private _router: Router ){
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
  activeElement: HTMLElement | null = null;

  timeoutId: ReturnType<typeof setTimeout> | null = null;
   

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent){
    const cursor = document.getElementById('cursorChanged');
    const cursorWidth = cursor!.clientWidth;
    const cursorHeight = cursor!.clientHeight;

    this.cursorX = event.clientX - cursorWidth / 2;
    this.cursorY = event.clientY - cursorHeight / 2;

    //We start the timeout
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
    }

    //if cursor don't move in 800ms then translate it to be more visible and not behind cursor
    this.timeoutId = setTimeout(() => {
      const cursor = document.getElementById('cursorChanged');
      const keyframes = {
        transform: `translate(${this.cursorX + 20}px, ${this.cursorY + 30}px)`
      };
      cursor?.animate(keyframes, {
        duration: 400,
        fill: 'forwards'
      });
    }, 800);

    const keyframes = {
      transform: `translate(${this.cursorX + 10}px, ${this.cursorY + 10}px)`
    }

    cursor?.animate(keyframes, {
      duration: 800,
      fill: 'forwards'
    })
  }

  //Search of ID or tag of the hover element and add it to its attribute to begin the animation
  @HostListener('mouseover', ['$event.target'])
  onHover(target: HTMLElement) {
    console.log(target.tagName)
    const cursor = document.getElementById('cursorChanged');
    if (target.id == 'goHome'){
      cursor?.setAttribute('data-active', 'home');
    } else if (target.id == 'goTourism'){
      cursor?.setAttribute('data-active', 'tourism');
    } else if (target.id == 'goInformations'){
      cursor?.setAttribute('data-active', 'informations');
    } else if ((target as HTMLElement).tagName == 'A') {
      cursor?.setAttribute('data-active', 'link');
    } else if ((target as HTMLElement).tagName == 'BUTTON') {
      cursor?.setAttribute('data-active', 'button');
    } else if ((target as HTMLElement).tagName !== 'A' || 'SPAN' || 'BUTTON' || 'IMG') {
      cursor?.setAttribute('data-active', `${target.tagName}`);
    }    
  }
}
