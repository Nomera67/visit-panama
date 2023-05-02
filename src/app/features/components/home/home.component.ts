import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }
  titlePos: number = 0;
  subTitlePos: number = 0;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const homeTitle = this.elementRef.nativeElement.querySelector('.home__title > h1');
    const homeSubtitle = this.elementRef.nativeElement.querySelector('.home__title > p');
    const homeContainer = this.elementRef.nativeElement.querySelector('.home__main');
    
    // Calculer la nouvelle position verticale du titre et du sous-titre
    this.titlePos = Math.round((homeContainer.getBoundingClientRect().top * -1) / 2);
    this.subTitlePos = Math.round((homeContainer.getBoundingClientRect().top * -1) / 4);

    // Appliquer les nouvelles positions verticales
    homeTitle.style.transform = `translateY(${this.titlePos}px)`;
    homeSubtitle.style.transform = `translateY(${this.subTitlePos}px)`;
  }

}
