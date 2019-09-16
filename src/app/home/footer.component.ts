import { Component, OnInit} from '@angular/core';
import { faFacebookF, faTwitter, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  template: `
    <footer class='bg-dark'>
      <div>
        <div class='quick-links'>
          <h1>Quick Links</h1>
          <div>
            <a href='#'><h5>Link 2</h5></a>
            <a href='#'><h5>Link 3</h5></a>
            <a href='#'><h5>Link 4</h5></a>
            <a href='#'><h5>Link 5</h5></a>
          </div>
        </div>
        <div class='social-media'>
          <h1>Social Media</h1>
          <div class='social-media-buttons'>
            <button class='facebook'><fa-icon [icon]="faFacebookF"></fa-icon></button>
            <button class='twitter'><fa-icon [icon]="faTwitter"></fa-icon></button>
            <button class='instagram'><fa-icon [icon]="faInstagram"></fa-icon></button>
            <button class='linkedin'><fa-icon [icon]="faLinkedin"></fa-icon></button>
          </div>
        </div>
        <div class='contact'>
          <h1>Contact</h1>

          <span><fa-icon [icon]="faWhatsapp"></fa-icon><p class='number'>09066439983</p></span>
          <span><fa-icon [icon]="faMapMarkedAlt"></fa-icon><p class='address'>Plot 15 Jobi fele way</p></span>
        </div>
      </div>
      <div class="copyright">
        <p>© 2018 Copyright: Johua Akande</p>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faMapMarkedAlt = faMapMarkedAlt;

  constructor() {
   }
  ngOnInit() {
  }
}
