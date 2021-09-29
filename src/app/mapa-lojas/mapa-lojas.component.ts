import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-lojas',
  templateUrl: './mapa-lojas.component.html',
  styleUrls: ['./mapa-lojas.component.scss'],
})
export class MapaLojasComponent implements OnInit {
  fillColor = 'gray';

  constructor() {}

  ngOnInit(): void {}

  changeColor(e: any) {
    const id = 'maparecifeoutlet';
    const classe = 'st4';
    const query = e.target.innerText;
    const mapasvg = document.getElementById(id);
    const lojas = document.querySelectorAll('.st4');
    if (lojas) {
      lojas.forEach((l) => {
        l.setAttribute('fill', 'gray');
      });
    }
    const loja = document.getElementById('Lojas_Americanas');
    if (loja) loja.style.fill = '#ffdc04';
    // console.log(lojas.length);
  }
  selectLoja(loja: string) {
    console.log(loja);
  }
}
