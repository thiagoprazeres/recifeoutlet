import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
