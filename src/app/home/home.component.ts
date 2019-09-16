import { Component, OnInit } from '@angular/core';
import { faCommentDots, faIndustry, faEnvelopeOpen, faGem, faHardHat, faUser, faAt } from '@fortawesome/free-solid-svg-icons';
// import { faIndustry } from '@fortawesome/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services = ['', '', '', '', '', '', '', '', '', '', '', ''];
  constructor() { }
  faIndustry = faIndustry;
  faGem = faGem;
  faHardHat = faHardHat;
  faUser = faUser;
  faAt = faAt;
  faEnvelopeOpen = faEnvelopeOpen;
  faCommentDots = faCommentDots;
  TilesPosition(event: Event) {
    console.log(event);
  }
  ngOnInit() {
  }

}
