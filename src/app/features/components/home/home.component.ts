import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { NavbarheightService } from 'src/app/services/navbarheight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    console.log(this.titlePos)
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }
  


  titlePos: number = 0;
  subTitlePos: number = 0;
  opacity: number = 1


  constructor(private elementRef: ElementRef, private navbarService: NavbarheightService) {}
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    const homeTitle = this.elementRef.nativeElement.querySelector('.home__title > h1');
    const homeSubtitle = this.elementRef.nativeElement.querySelector('.home__title > p');
    const homeContainer = this.elementRef.nativeElement.querySelector('.home__main');
    
    console.log(homeTitle);
    console.log(homeSubtitle);
    console.log(homeContainer);
    // Calculer la nouvelle position verticale du titre et du sous-titre
    this.titlePos = Math.round((homeContainer.getBoundingClientRect().top * -1) / 2);
    this.subTitlePos = Math.round((homeContainer.getBoundingClientRect().top * -1) / 4);

    console.log(this.titlePos);
    console.log(this.subTitlePos);
    // Appliquer les nouvelles positions verticales
    homeTitle.style.transform = `translateY(${this.titlePos}px)`;
    homeSubtitle.style.transform = `translateY(${this.subTitlePos}px)`;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.pageYOffset;
    const maxScroll = document.body.clientHeight - window.innerHeight;
    const opacity = 1 - (scrollPosition / maxScroll) * 6;
    this.opacity = opacity < 0 ? 0 : opacity;
  }

  public scrollToIntroduction(): void {
    const introduction = document.getElementById('introduction__beginning');
    const navbarHeight = this.navbarService.navbarHeight;
    
    if (introduction) {
      const introductionCoordinate = introduction.getBoundingClientRect().top + window.scrollY;
      const terminalCoordinate = introductionCoordinate - navbarHeight;
      window.scrollTo({ top: terminalCoordinate, behavior: 'smooth' });
    }
  }
}
