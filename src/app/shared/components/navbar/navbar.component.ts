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

}
