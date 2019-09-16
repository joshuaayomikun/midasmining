import { Component, OnInit, Input, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-moving-tile',
  template: `
  <div id="parent" >
    <div class='child' *ngFor = 'let service of services' [style.transform]="'translateX(' + time + 'px)'">
      <div>
      <!--<div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="../../assets/Images/feldspar.jpg">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
        </div>
        <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="../../assets/Images/feldspar.jpg">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
        </div>
        <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="../../assets/Images/feldspar1.jpg">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
        </div>-->
        <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="../../assets/Images/feldspar2.jpg">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
          </div>
          </div>
        <!-- <img src='../../assets/Images/feldspar.jpg' />
        <img src='../../assets/Images/feldspar.jpg' />
        <img src='../../assets/Images/feldspar1.jpg' />
        <img src='../../assets/Images/feldspar2.jpg' />-->
      </div>
      <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <mat-divider></mat-divider>
        <button mat-button class='btn action-button'>Read more</button>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./movingtiles.component.css']
})
export class MovingTilesComponent implements OnInit {

  @Input() services: any;
  @Input() moveposition: any;
  time = 0;
  isBrowser: boolean;
  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
   }

  movetiles() {
    console.log({ ElementRef : this.el});
    setInterval(() => {
      this.time += -150;
      // tslint:disable-next-line: max-line-length
      this.time = this.el.nativeElement.querySelector('#parent').lastElementChild.getBoundingClientRect().x + this.el.nativeElement.querySelector('#parent').lastElementChild.getBoundingClientRect().width <= this.el.nativeElement.querySelector('#parent').getBoundingClientRect().width ? 0 : this.time;
      // console.log(this.el.nativeElement);
      // console.log(this.services);
    }, 3000);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.movetiles();
    }
  }

}
