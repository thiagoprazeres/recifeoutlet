import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pet-friendly',
  templateUrl: './pet-friendly.component.html',
  styleUrls: ['./pet-friendly.component.scss'],
})
export class PetFriendlyComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Pet Friendly');
  }

  ngOnInit(): void {}
}
