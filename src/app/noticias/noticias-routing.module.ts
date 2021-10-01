import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NoticiasComponent} from './noticias.component';

const routes: Routes = [
  {
    path: ':title',
    component: NoticiasComponent,
  },
  {
    path: '**',
    component: NoticiasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasRoutingModule {}

