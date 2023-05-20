import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(public _router:Router) { }

  ngOnInit(): void {
  }

  toHome() {
    const button = document.getElementById('homeButton');
    const svg = document.getElementById('homeSvg');
    const container = document.getElementById('container');
    const hiderContainer = document.getElementById('container--hide');


    button?.classList.add('hideCTA');
    svg?.classList.add('hideSvg');
    container?.classList.add('hideContainer');
    hiderContainer?.classList.add('disappearActive');
    //Ajout d'un timer pour permettre de mettre les effets en SCSS avant de rediriger
    setTimeout(() => {
      // Redirection vers la page visée
      this._router.navigate(['/home']);
    }, 5000);
  }
  

}
