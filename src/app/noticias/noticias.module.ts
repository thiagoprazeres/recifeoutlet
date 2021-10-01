import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {NoticiasRoutingModule} from './noticias-routing.module';
import {NoticiasComponent} from './noticias.component';

@NgModule({
  declarations: [NoticiasComponent],
  imports: [CommonModule, NoticiasRoutingModule, ScullyLibModule],
})
export class NoticiasModule {}
