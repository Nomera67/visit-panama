import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

import { NavbarheightService } from 'src/app/services/navbarheight.service';

@Component({
  selector: 'app-tourisme',
  templateUrl: './tourisme.component.html',
  styleUrls: ['./tourisme.component.scss']
})
export class TourismeComponent implements OnInit {


  ngOnInit(): void {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  titlePos: number = 0;
  airplanePos: number = 0;
  airplaneAlt: number = 0;
  opacity: number = 1;

  constructor(private navbarService: NavbarheightService, private elementRef: ElementRef){}

  onWindowScroll() {

    const tourismTitle = this.elementRef.nativeElement.querySelector('.tourism__title > h1');
    const airplane = this.elementRef.nativeElement.querySelector('.tourism__plane');
    const tourismContainer = this.elementRef.nativeElement.querySelector('.tourism__main');
    
    // Calculer la nouvelle position verticale du titre et de l'avion avec son altitude
    this.titlePos = Math.round((tourismContainer.getBoundingClientRect().top * -1) / 2);
    this.airplanePos = Math.round((tourismContainer.getBoundingClientRect().top * -1) * 2);
    this.airplaneAlt = Math.round(tourismContainer.getBoundingClientRect().top * -1);

    // Appliquer les nouvelles positions
    tourismTitle.style.transform = `translateY(${this.titlePos}px)`;
    airplane.style.transform = `translateX(${this.airplanePos}px) translateY(-${this.airplaneAlt}px) rotateY(180deg)`;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.pageYOffset;
    const maxScroll = document.body.clientHeight - window.innerHeight;
    const opacity = 1 - (scrollPosition / maxScroll) * 6;
    this.opacity = opacity < 0 ? 0 : opacity;
  }


  public scrollToInvitation(): void {
    const invitation = document.getElementById('invitationBeginning');
    const navbarHeight = this.navbarService.navbarHeight;
    
    if (invitation) {
      const invitationCoordinate = invitation.getBoundingClientRect().top + window.scrollY;
      const terminalCoordinate = invitationCoordinate - navbarHeight;
      window.scrollTo({ top: terminalCoordinate, behavior: 'smooth' });
    }
  }


}
