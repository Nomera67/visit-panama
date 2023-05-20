import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.scss']
})
export class UtilityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const hook = document.querySelector('#utilityHook');
    const formalities = document.querySelector('#formalities');
    const healt = document.querySelector('#healt');
    const moving = document.querySelector('#moving');
    const booking = document.querySelector('#booking');
    const money = document.querySelector('#money');
    if (hook && formalities && healt && moving && booking && money){
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
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
      observer.observe(hook);
      observer.observe(formalities);
      observer.observe(healt);
      observer.observe(moving);
      observer.observe(booking);
      observer.observe(money);
    }
  }

}
