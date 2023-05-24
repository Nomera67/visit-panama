import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarheightService } from 'src/app/services/navbarheight.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public _router: Router, private navbarService: NavbarheightService) { }

  ngOnInit(): void {
    this.navbarService.navbarHeight = document.getElementById('headerMenu')?.clientHeight || 0;
  }

  isActive(url: string): boolean {
    return this._router.isActive(url, true);
  }


  toggleNav(){
    const primaryNav = document.getElementById("primary-navigation");
    const toggleButton = document.getElementById('toggleButton');
    const logo = document.getElementById('logoItem');
    if(primaryNav?.getAttribute("data-visible") === "false"){ //if navbar is not visible
      primaryNav.setAttribute("data-visible", "true"); //let it appear with the attribute
      toggleButton?.setAttribute("aria-expanded", "true"); //and tell it to screen readers
      logo?.setAttribute("data-color", "true");
    } else {
      primaryNav?.setAttribute("data-visible", "false"); //else let it disappear with removing the attribute
      toggleButton?.setAttribute("aria-expanded", "false") //and tell it to screen readers
      logo?.setAttribute("data-color", "false");
    }
  }

  

  backgroundChange(){
    const primaryNav = document.getElementById("background__menu");
    const items = Array.from(document.querySelectorAll(".nav__item"));
    let previousIndex = 0;
    let lastChangeTime = 0;
    const cooldownTime = 100; // Temps de cooldown en millisecondes
  
    items.forEach((item, index) => {
      item.addEventListener("mouseover", () => {
        const currentTime = Date.now();
        if (currentTime - lastChangeTime >= cooldownTime) { // Vérifie si suffisamment de temps s'est écoulé
          lastChangeTime = currentTime; // Met à jour le temps du dernier changement
          if (previousIndex !== index) { // Vérifie si l'index a changé
            primaryNav?.classList.add("blackout");
            setTimeout(() => {
              primaryNav?.setAttribute("data-active-index", index.toString());
              previousIndex = index; // Met à jour l'index précédent
            }, 200);
            setTimeout(() => {
              primaryNav?.classList.remove("blackout");
              primaryNav?.classList.add("illumination");
            }, 400);
            primaryNav?.classList.remove("illumination");
          }
        }
      });
    });
  }

  toHome(){
    const tourismPage = document.querySelector('#tourismTitleContainer');
    const tourismIntro = document.querySelector('#tourismIntro');
    const infoPage = document.querySelector('#informationTitleContainer');
    const infoIntro = document.querySelector('#informationIntro');
    const invisibilityKeyframe = {
      opacity: `0`
    }
    setTimeout(() => {
      this._router.navigate(['/home']);
    }, 500)
    if(tourismPage && tourismIntro){
      tourismPage.animate(invisibilityKeyframe, {
        duration: 450,
        fill: 'forwards'
      });
      tourismIntro.animate(invisibilityKeyframe, {
        duration: 450,
        fill: 'forwards'
      });
    } else if(infoPage && infoIntro){
      infoPage.animate(invisibilityKeyframe, {
        duration: 450,
        fill: 'forwards'
      });
      infoIntro.animate(invisibilityKeyframe, {
        duration: 450,
        fill: 'forwards'
      });
    }
  }

  toTourisme(){
    const homePage = document.querySelector('#titleContainer');
    const homeIntro = document.querySelector('#titleIntroduction');
    const infoPage = document.querySelector('#informationTitleContainer');
    const infoIntro = document.querySelector('#informationIntro');
    const invisibilityKeyframe = {
      opacity: `0`
    }
    setTimeout(() => {
      this._router.navigate(['/tourisme']);
    }, 500)
    if(homePage && homeIntro){
      homePage.animate(invisibilityKeyframe, {
        duration: 450,
        fill: 'forwards'
      });
      homeIntro.animate(invisibilityKeyframe, {
        duration: 450,
        fill: 'forwards'
      });
    } else if(infoPage && infoIntro){
      infoPage.animate(invisibilityKeyframe, {
        duration: 450,
        fill: 'forwards'
      });
      infoIntro.animate(invisibilityKeyframe, {
        duration: 450,
        fill: 'forwards'
      });
    }
  }

  toInformations(){
    
    const homePage = document.querySelector('#titleContainer');
    const homeIntro = document.querySelector('#titleIntroduction');
    const tourismPage = document.querySelector('#tourismTitleContainer');
    const tourismIntro = document.querySelector('#tourismIntro');
    const invisibilityKeyframe = {
      opacity: `0`
    }
    setTimeout(() => {
      this._router.navigate(['/informations']);
    }, 500)
    if(homePage && homeIntro){
      homePage.animate(invisibilityKeyframe, {
        duration: 450,
        fill: 'forwards'
      });
      homeIntro.animate(invisibilityKeyframe, {
        duration: 450,
        fill: 'forwards'
      });
    } else if(tourismPage && tourismIntro){
      tourismPage.animate(invisibilityKeyframe, {
        duration: 450,
        fill: 'forwards'
      });
      tourismIntro.animate(invisibilityKeyframe, {
        duration: 450,
        fill: 'forwards'
      });
    }

  }

}

// ngOnInit(): void {
//   const geography = document.querySelector('#geography');
//   const heritage = document.querySelector('#heritage');
//   const biodiversity = document.querySelector('#biodiversity');
//   const introduction = document.querySelector('#introduction__hook');
//   if (geography && heritage && biodiversity && introduction) {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setTimeout(() => {
//             entry.target.classList.add('is-visible');
//           }, 200);
//         } else {
//           setTimeout(() => {
//             entry.target.classList.remove('is-visible');
//           }, 200);
//         }
//       });
//     });
//     observer.observe(introduction);
//     observer.observe(geography);
//     observer.observe(heritage);
//     observer.observe(biodiversity);
//   }
// }