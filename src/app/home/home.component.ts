import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Recife Outlet');
  }

  ngOnInit(): void {}
}
