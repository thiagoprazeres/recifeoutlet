import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mapa-lojas',
  templateUrl: './mapa-lojas.component.html',
  styleUrls: ['./mapa-lojas.component.scss'],
})
export class MapaLojasComponent implements OnInit {
  fillColor = 'gray';

  constructor(private route: ActivatedRoute, private titleService: Title) {
    this.titleService.setTitle('Lojas');
  }

  ngOnInit(): void {
    const preLink = 'link';
    this.route.fragment.subscribe((fragment) => {
      console.log('My hash fragment is here => ', fragment);
      if (fragment) {
        //marca na lista
        const links = document.querySelectorAll('.mapplic-list-location');
        console.log(links);
        links.forEach((e) => {
          console.log(e);
          e.classList.remove('active');
        });
        const idLink = document.getElementById(preLink + fragment);
        if (idLink) {
          if (idLink.parentElement)
            idLink.parentElement.classList.add('active');
        }
        //marca no mapa
        this.changeColor(fragment);
      }
    });
  }

  changeColor(lojaId: string) {
    // const id = 'maparecifeoutlet';
    const classe = '.st4';
    const lojas = document.querySelectorAll(classe);
    if (lojas) {
      lojas.forEach((l) => {
        l.setAttribute('fill', 'gray');
      });
    }
    const loja = document.getElementById(lojaId);
    if (loja) loja.setAttribute('fill', '#ffdc04');
  }
  selectLoja(loja: string) {
    console.log(loja);
  }
}
