import { Component, OnInit, HostListener } from '@angular/core';
import { NavbarheightService } from 'src/app/services/navbarheight.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  constructor(private navbarService: NavbarheightService) { }

  ngOnInit(): void {
  }

  opacity: number = 1;


  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.pageYOffset;
    const maxScroll = document.body.clientHeight - window.innerHeight;
    const opacity = 1 - (scrollPosition / maxScroll) * 6;
    this.opacity = opacity < 0 ? 0 : opacity;
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
