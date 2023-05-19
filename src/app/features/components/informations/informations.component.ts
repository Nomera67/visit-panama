import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { NavbarheightService } from 'src/app/services/navbarheight.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  constructor(private navbarService: NavbarheightService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onWindowScroll.bind(this))
  }

  opacity: number = 1;
  opacityTitle: number = 0.8;
  titlePos: number = 0;
  secondaryPos: number = 0;
  secondaryX: number = 0;

  onWindowScroll() {

    const informationTitle = this.elementRef.nativeElement.querySelector('.information__title > h1');
    const informationSecondary = this.elementRef.nativeElement.querySelector('.information__secondary > h2');
    const informationContainer = this.elementRef.nativeElement.querySelector('.information__main');
    
    this.titlePos = Math.round((informationContainer.getBoundingClientRect().top * -1) * 1.5);
    this.secondaryPos = Math.round((informationContainer.getBoundingClientRect().top * -1) * 3);

    // Appliquer les nouvelles positions
    informationTitle.style.transform = `translateY(${this.titlePos}px)`;
    informationSecondary.style.transform = `translateY(${this.secondaryPos}px)`;
  }


  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.pageYOffset;
    const maxScroll = document.body.clientHeight - window.innerHeight;
    const opacityTitle = .8 - (scrollPosition / maxScroll) * 30;
    const opacity = 1 - (scrollPosition / maxScroll) * 6;
    this.opacity = opacity < 0 ? 0 : opacity;
    this.opacityTitle = opacityTitle < 0 ? 0 : opacityTitle;
  }

  public scrollToInvitation(): void {
    const invitation = document.getElementById('utilityBeginning');
    const navbarHeight = this.navbarService.navbarHeight;
    
    if (invitation) {
      const invitationCoordinate = invitation.getBoundingClientRect().top + window.scrollY;
      const terminalCoordinate = invitationCoordinate - navbarHeight;
      window.scrollTo({ top: terminalCoordinate, behavior: 'smooth' });
    }

  }
}
