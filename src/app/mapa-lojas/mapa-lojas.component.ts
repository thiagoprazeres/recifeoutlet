import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

@Component({
  selector: 'app-mapa-lojas',
  templateUrl: './mapa-lojas.component.html',
  styleUrls: ['./mapa-lojas.component.scss'],
})
export class MapaLojasComponent implements OnInit {
  fillColor = 'rgb(33, 33, 33)';

  constructor() {}

  ngOnInit(): void {}

  changeColor(e: any) {
    const query = e.target.innerText;
    console.log(query);
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
  selectLoja(loja: string) {
    console.log(loja);
  }
}
