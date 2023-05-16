import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const hook = document.querySelector('#invitationHook');
    const culture = document.querySelector('#invitationCulture');
    const invitationBiodiversity = document.querySelector('#invitationBiodiversity');
    const beach = document.querySelector('#invitationBeach');
    const activity = document.querySelector('#invitationActivity');
    const canal = document.querySelector('#invitationCanal');
    if (hook && culture && invitationBiodiversity && beach && activity && canal){
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
      observer.observe(culture);
      observer.observe(invitationBiodiversity);
      observer.observe(beach);
      observer.observe(activity);
      observer.observe(canal);
    }
  }

}
