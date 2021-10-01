import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { MapaLojasComponent } from './mapa-lojas/mapa-lojas.component';
import { ContatoComponent } from './contato/contato.component';
import { PetFriendlyComponent } from './pet-friendly/pet-friendly.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'mapa-lojas', component: MapaLojasComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'pet-friendly', component: PetFriendlyComponent },
  {
    path: 'noticias',
    loadChildren: () =>
      import('./noticias/noticias.module').then((m) => m.NoticiasModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
