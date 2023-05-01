import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public _router: Router) { }

  ngOnInit(): void {
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

  toHome(){
    this._router.navigate(['/home']);
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

}
