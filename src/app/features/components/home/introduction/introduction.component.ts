import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const geography = document.querySelector('#geography');
    const heritage = document.querySelector('#heritage');
    const biodiversity = document.querySelector('#biodiversity');
    const introduction = document.querySelector('#introduction__hook');
    if (geography && heritage && biodiversity && introduction) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, 200);
          } else {
            setTimeout(() => {
              entry.target.classList.remove('is-visible');
            }, 200);
          }
        });
      });
      observer.observe(introduction);
      observer.observe(geography);
      observer.observe(heritage);
      observer.observe(biodiversity);
    }
  }
}